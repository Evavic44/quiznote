"use client";

import { useQuizStore } from "@/store/quiz";
import CountdownTimer from "../shared/CountdownTimer";
import FormField from "./FormField";
import Quiz from "./Quiz";
import ScoreLine from "../shared/ScoreLine";
import { useFormStore } from "@/store/form";

export default function QuizContainer({ timer }: { timer: number }) {
  const quizzes = useQuizStore((state) => state.quizzes);
  const index = useQuizStore((state) => state.index);
  const nextIndex = useQuizStore((state) => state.nextIndex);
  const selectedAnswer = useQuizStore((state) => state.selectedAnswer);
  const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);
  const setStatus = useFormStore((state) => state.setStatus);
  const { id, question, answer, description, options, resources } =
    quizzes[index];

  const correctAnswer = answer === selectedAnswer;
  const lastQuestion = index === quizzes.length - 1;
  console.log(timer);

  return (
    <FormField>
      <div key={id}>
        <div className="flex flex-col mb-4">
          <CountdownTimer minutes={timer} />
        </div>

        <blockquote className="max-w-md mx-auto text-center font-semibold text-xl leading-relaxed text-zinc-700 tracking-tight mt-12">
          {question}
        </blockquote>

        <ScoreLine />

        <div className="flex flex-col gap-4 my-8">
          {Object.entries(options).map(([key, value]) => (
            <Quiz
              key={`${id}-${key}`}
              alpha={key}
              id={+id}
              text={value}
              answer={answer}
              onSetAnswer={setSelectedAnswer}
              selectedAnswer={selectedAnswer}
              correctAnswer={correctAnswer}
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

        {lastQuestion && (
          <button
            onClick={() => setStatus("summary")}
            className="flex mx-auto mt-16 bg-primary hover:bg-secondary text-white text-center px-4 py-3 rounded-full duration-200"
          >
            View Summary
          </button>
        )}
        {!lastQuestion && (
          <button
            onClick={() => {
              nextIndex();
              setSelectedAnswer("");
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
