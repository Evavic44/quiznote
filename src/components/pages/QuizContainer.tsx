"use client";

import { useQuizStore } from "@/store/quiz";
import CountdownTimer from "../shared/CountdownTimer";
import FormField from "./FormField";
import Quiz from "./Quiz";
import { useTimerStore } from "@/store/timer";
import { useFormStore } from "@/store/form";
import { useMemo, useState } from "react";
import ProgressBar from "../shared/ProgressBar";

export default function QuizContainer() {
  const quizzes = useQuizStore((state) => state.quizzes);
  const index = useQuizStore((state) => state.index);
  const { id, question, answer, description, options, resources } =
    quizzes[index];

  const nextIndex = useQuizStore((state) => state.nextIndex);
  const selectedAnswer = useQuizStore((state) => state.selectedAnswer);
  const setStatus = useFormStore((state) => state.setStatus);
  const timer = useTimerStore((state) => state.timer);
  const [timeLeft, setTimeLeft] = useState(timer * 60);

  const correctAnswer = useMemo(() => {
    return answer === selectedAnswer;
  }, [answer, selectedAnswer]);

  const lastQuestion = index === quizzes.length - 1;

  return (
    <FormField>
      <div key={id}>
        <div className="flex flex-col mb-4">
          <CountdownTimer
            minutes={timer}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
          />
        </div>

        <ProgressBar />

        <blockquote className="max-w-md mx-auto text-center font-semibold text-xl leading-relaxed text-zinc-700 tracking-tight mt-12">
          {question}
        </blockquote>

        <div className="flex flex-col gap-4 my-8">
          {Object.entries(options).map(([key, value]) => (
            <Quiz
              key={`${id}-${key}`}
              alpha={key}
              text={value}
              quiz={quizzes[index]}
            />
          ))}
        </div>

        {selectedAnswer && (
          <em className="block not-italic text-sm font-geistmono text-center">
            <span className={correctAnswer ? "text-green-600" : "text-red-600"}>
              {correctAnswer ? "Correct!" : "Wrong!"}
            </span>{" "}
            The answer is <span className="font-bold">&#40;{answer}&#41;</span>
          </em>
        )}

        {lastQuestion ? (
          <button
            onClick={() => setStatus("summary")}
            className="flex mx-auto mt-16 bg-primary hover:bg-secondary text-white text-center px-4 py-3 rounded-full duration-200"
          >
            View Summary
          </button>
        ) : (
          <button
            onClick={() => {
              nextIndex();
            }}
            className="flex mx-auto mt-16 bg-primary hover:bg-secondary text-white text-center px-4 py-3 rounded-full duration-200"
          >
            Next Question
          </button>
        )}
      </div>
    </FormField>
  );
}
