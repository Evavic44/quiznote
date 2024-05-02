import { useQuizStore } from "@/store/quiz";
import { QuizType } from "../../../types";
import { useMemo } from "react";

export default function Quiz({
  alpha,
  text,
  quiz,
}: {
  alpha: string;
  text: string;
  quiz: QuizType;
}) {
  const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);
  const selectedAnswer = useQuizStore((state) => state.selectedAnswer);
  const addPoints = useQuizStore((state) => state.addPoints);
  const hasAnswered = useMemo(() => {
    return selectedAnswer !== "";
  }, [selectedAnswer]);

  const getColStr = (c1: string, c2: string, c3: string) =>
    hasAnswered && quiz.answer === selectedAnswer && quiz.answer === alpha
      ? c1
      : hasAnswered &&
        quiz.answer !== selectedAnswer &&
        selectedAnswer === alpha
      ? c2
      : c3;

  return (
    <label
      htmlFor={alpha}
      className={`flex items-center justify-between w-full gap-x-6 max-w-xl mx-auto rounded-full px-4 py-3 font-geistmono cursor-pointer min-h-16 duration-300 ${getColStr(
        "bg-primary text-white",
        "bg-error text-white",
        "bg-zinc-100 text-zinc-700"
      )}`}
    >
      <div
        className={`min-w-8 min-w-h-8 grid place-content-center rounded-full font-medium
       ${getColStr(
         "bg-secondary text-white",
         "bg-[#cc1f1f] text-white",
         "bg-zinc-100 text-zinc-700"
       )}`}
      >
        {alpha}
      </div>{" "}
      <p className="select-none text-sm">{text}</p>
      <input
        type="radio"
        value={alpha}
        id={alpha}
        onChange={(e) => {
          setSelectedAnswer(e.target.value);

          if (e.target.value === quiz.answer) {
            addPoints();
          }
        }}
        disabled={hasAnswered}
        className={`ml-auto self-center h-4 w-4 rounded-full focus:ring-transparent
        ${getColStr(
          "border-[#1d64c0] text-secondary",
          "border-[#bb2020] text-red-500",
          "border-gray-300 text-primary"
        )}`}
      />
    </label>
  );
}
