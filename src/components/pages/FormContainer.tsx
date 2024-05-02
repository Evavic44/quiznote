"use client";

import { useFormStore } from "@/store/form";
import Form from "./Form";
import Loading from "@/components/shared/Loading";
import { useEffect, useState } from "react";
import { useQuizStore } from "@/store/quiz";
import { useTimerStore } from "@/store/timer";
import QuizContainer from "./QuizContainer";
import FormField from "./FormField";
import Summary from "./Summary";

export default function FormContainer() {
  const status = useFormStore((state) => state.status);
  const setStatus = useFormStore((state) => state.setStatus);
  const setQuizzes = useQuizStore((state) => state.setQuizzes);
  const reset = useQuizStore((state) => state.reset);
  const [streamContent, setStreamContent] = useState<string>("");
  const timer = useTimerStore((state) => state.timer);
  const setTimer = useTimerStore((state) => state.setTimer);

  useEffect(() => {
    if (status === "done") {
      try {
        const data = JSON.parse(streamContent);
        setQuizzes(data);
      } catch (error) {
        alert(`Error generating quizzes, try again!`);
        reset();
        setStreamContent("");
        setStatus("idle");
      }
    }
  }, [status, setQuizzes, reset, setStatus, streamContent]);

  async function generateQuiz(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("streaming");
    setStreamContent("");

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
      {status === "idle" && (
        <Form timer={timer} onSetTimer={setTimer} onSubmit={generateQuiz} />
      )}
      {status === "streaming" && <Loading />}
      {status === "done" && (
        <FormField>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center ">
            <p className="max-w-sm text-center text-sm text-zinc-500 mb-4">
              Quiz successfully generated! Click the button to begin whenever
              you&apos;re ready!
            </p>
            <button
              onClick={() => setStatus("start")}
              className="font-geistmono font-semibold tracking-widest bg-primary hover:bg-secondary duration-200 text-white rounded-full px-6 py-3"
            >
              Start Quiz
            </button>
          </div>
        </FormField>
      )}
      {status === "start" && <QuizContainer />}
      {status === "summary" && <Summary />}
    </section>
  );
}
