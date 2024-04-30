import {
  HarmBlockThreshold,
  HarmCategory,
  VertexAI,
} from "@google-cloud/vertexai";
import { StreamingTextResponse } from "ai";

// // Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({
  project: "teak-flash-361520",
  location: "europe-west3",
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

const text1 = {
  text: `You are an all-rounder tutor with professional expertise in different fields. You are to generate a list of quiz questions from the document(s).`,
};
const text2 = {
  text: `You response should be in JSON as an array of the object below. Respond with 20 different questions.
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
 \"resources\": [
   {
     \"title\": \"\",
     \"link\": \"\"
   },
   {
     \"title\": \"\",
     \"link\": \"\"
   }
 ]
}`,
};

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done || !value) {
        controller.close();
      } else {
        const data = value.candidates[0].content.parts[0].text;

        controller.enqueue(`data: ${data}\n\n`);
      }
    },
  });
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = formData.getAll("files") as File[];
  const notes = formData.get("note");

  // Can't view files from postman but notes are working
  //   console.log(files, notes);
  const body = {
    contents: [{ role: "user", parts: [text1, text2] }],
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
      "Access-Control-Allow-Origin": "*",
    },
  });
}
