"use client";

import { useFormStore } from "@/store/form";
import Form from "./Form";
import FormField from "@/components/pages/FormField";
import Loading from "@/components/shared/Loading";
import { useState } from "react";
import { useQuizStore } from "@/store/quiz";

export default function FormContainer() {
  const status = useFormStore((state) => state.status);
  const setStatus = useFormStore((state) => state.setStatus);
  const setQuizzes = useQuizStore((state) => state.setQuizzes);
  const [streamContent, setStreamContent] = useState<string>("");

  async function generateQuiz(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("streaming");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/generate", {
      method: "POST",
      body: formData,
    });

    if (res.body) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // remov ```json from the start  and remove ``` from the end of the string
          setStreamContent((prev) =>
            prev.replace("```json", "").replace("```", "")
          );
          console.log(streamContent);
          setQuizzes(JSON.parse(streamContent));
          setStatus("done");

          return;
        }
        setStreamContent((prev) => prev + value);
      }
    }

    setStatus("done");
  }

  return (
    <section>
      {status === "idle" && <Form onSubmit={generateQuiz} />}
      {status === "streaming" && <Loading />}
      {status === "done" && (
        <FormField>
          <pre>{streamContent}</pre>
        </FormField>
      )}
    </section>
  );
}
