import {
  HarmBlockThreshold,
  HarmCategory,
  VertexAI,
} from "@google-cloud/vertexai";
import { StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_KEY || "", "base64").toString()
);

// // Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({
  project: "teak-flash-361520",
  location: "europe-west3",
  googleAuthOptions: {
    credentials,
  },
});
const model = "gemini-1.5-pro-preview-0409";

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 8192,
    temperature: 1,
    topP: 0.95,
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
});

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done || !value) {
        controller.close();
      } else {
        const data = value.candidates[0].content.parts[0].text;

        // controller.enqueue(`data: ${data}\n\n`);
        controller.enqueue(data);
      }
    },
  });
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = formData.getAll("files") as File[];
  const notes = formData.get("notes");
  const totalQuizQuestions = formData.get("quizCount");
  const difficulty = formData.get("difficulty");
  const topic = formData.get("topic");

  if (files.length < 1 && !notes) {
    return new NextResponse("Please provide either a file or notes", {
      status: 400,
    });
  }

  const text1 = {
    text: `You are an all-rounder tutor with professional expertise in different fields. You are to generate a list of quiz questions from the document(s) with a difficutly of ${
      difficulty || "Easy"
    }.`,
  };
  const text2 = {
    text: `You response should be in JSON as an array of the object below. Respond with ${
      totalQuizQuestions || 5
    } different questions.
  {
   \"id\": 1,
   \"question\": \"\",
   \"description\": \"\",
   \"options\": {
     \"a\": \"\",
     \"b\": \"\",
     \"c\": \"\",
     \"d\": \"\"
   },
   \"answer\": \"\",
  }`,
  };

  const filesBase64 = await Promise.all(
    files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      // return "data:" + file.type + ";base64," + buffer.toString("base64");
      return buffer.toString("base64");
    })
  );

  const filesData = filesBase64.map((b64, i) => ({
    inlineData: {
      mimeType: files[i].type,
      data: b64,
    },
  }));

  const data =
    files.length > 0 ? filesData : [{ text: notes?.toString() || "No notes" }];

  const body = {
    contents: [{ role: "user", parts: [text1, ...data, text2] }],
  };

  const resp = await generativeModel.generateContentStream(body);

  // Convert the response into a friendly text-stream
  const stream = iteratorToStream(resp.stream);

  return new StreamingTextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Transfer-Encoding": "chunked",
    },
  });
}
