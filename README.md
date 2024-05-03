<div align="center">
<a href="https://quiznote.vercel.app"><img src="/public/logo.png" width="60px"></a>
</div>

<div align="center">
<h1>Quiznote</h1>
<p>The ultimate learner's companior for transforming notes into interactive quizzes to help maximize learning retention</p>
<!-- TODO: Replace with demo video -->
<img src="/public/images/cover.png" alt="cover image" />
</div>

## Technologies

- 🎯 [NextJS](https://nextjs.org) - UI framework
- ☑️ [Vercel](https://vercel.com) - Hosting and deployment
- 💅🏽 [TailwindCSS](https://tailwindcss.com) /CSS - Styling and UI
- 🤖 [Gemini](httpps://gemini.google.com) / AI API

## Run Project Locally

Follow the steps below to run quiznote locally on your machine

- Rename `.env.example` to `.env`
- Get your private keys from [google cloud](https://cloud.google.com)
- Set the value of the `NEXT_PUBLIC_GOOGLE_CLOUD_ID` and `NEXT_PUBLIC_PROJECT_ID` variables.

```bash
git clone https://github.com/Evavic44/quiznote

cd quiznote

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Important files and folders

| File(s)                                       | Description                                   |
| --------------------------------------------- | --------------------------------------------- |
| [`route.ts`](./src/app/api/generate/route.ts) | Integration file for setting up Gemini prompt |
| [`page.tsx`](./src/app/page.tsx)              | Homepage route                                |
| [`components`](./src/components/)             | Where components are stored                   |
| [`store`](./src/store/)                       | State management store                        |

<div align="center">
  <p>Built for the <a href="https://googleai.devpost.com/?ref_feature=challenge&ref_medium=discover">Google AI Hackathon</a></p>
  <p>Powered by</p>
  <a href="https://gemini.google.com"><img src="/public/images/gemini.png" width="60px"></a>
</div>
