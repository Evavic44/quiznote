import {
  HarmBlockThreshold,
  HarmCategory,
  VertexAI,
} from "@google-cloud/vertexai";
import { NextApiRequest, NextApiResponse } from "next";

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
  text: `You are an experienced career analyst, generate a roadmap for this user to attain his career goal. Do not add the number of months in the phases. Break everything down to the smallest bits arranging them in objects and arrays.

Preferred career - Software engineering
Bio - I am a dedicated backend engineer with a passion for creating efficient and scalable solutions. With a strong background in computer science and years of experience in coding, I thrive in collaborative environments where I can contribute my expertise to solve complex problems. My proficiency spans across various programming languages and technologies, allowing me to adapt quickly to new challenges and deliver high-quality results. From designing robust algorithms to building user-friendly interfaces, I am committed to crafting software that enhances user experiences and drives innovation.
Goal - I want to become a frontend engineer.
Constraints - I want to achieve this goal in 1 year.

Your output should be in json format to be represented on a graph gui for example:


{
 \"frontend\": {
   \"learn_the_basics\": [
     \"What is the Internet?\",
     \"How does the internet work?\",
     \"What is HTTP?\"
   ],
   \"html\": {
     \"learn_the_basics\": [
       \"What is HTML?\",
       \"Writing Semantic HTML\"
     ],
     \"forms_and_validations\": [],
     \"accessibility\": [],
     \"seo_basics\": []
   },
   \"css\": {
     \"learn_the_basics\": [],
     \"making_layouts\": [],
     \"responsive_design\": [],
     \"learn_dom_manipulation\": [],
     \"architecture\": {
       \"bem\": [],
       \"tailwind\": [],
       \"other\": [
         \"CSS in JS\",
         \"CSS Modules\",
         \"Styled Components\",
         \"Vanilla Extract\",
         \"Panda CSS\"
       ]
     },
     \"frameworks\": [
       \"MUI\",
       \"daisyUI\",
       \"Chakra UI\",
       \"Mantine\"
     ]
   },
   \"javascript\": {
     \"version_control_systems\": [
       \"Git\",
       \"GitLab\",
       \"Bitbucket\"
     ],
     \"package_managers\": [
       \"npm\",
       \"pnpm\",
       \"yarn\"
     ],
     \"learn_the_basics\": [],
     \"fetch_api_ajax\": []
   },
   \"other\": [
     \"Visit the Beginner Version\"
   ]
 }
}`,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const bodyData = req.body;

  //   console.log(bodyData);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/event-stream;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("X-Accel-Buffering", "no");

  const body = {
    contents: [{ role: "user", parts: [text1] }],
  };

  const streamingResp = await generativeModel.generateContentStream(body);

  for await (const item of streamingResp.stream) {
    const payload = JSON.stringify(item);
    console.log(payload);
    res.write(`data: ${payload}\n\n`);
  }

  res.end();
}
