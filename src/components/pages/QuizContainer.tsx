import { useQuizStore } from "@/store/quiz";
import CountdownTimer from "../shared/CountdownTimer";
import FormField from "./FormField";
import Quiz from "./Quiz";

export default function QuizContainer() {
  const quizzes = useQuizStore((state) => state.quizzes);
  const index = useQuizStore((state) => state.index);
  const selectedAnswer = useQuizStore((state) => state.selectedAnswer);
  const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);

  const { id, question, answer, description, options, resources } =
    quizzes[index];

  // const correct = answer === selectedAnswer.match(answer);

  console.log(answer);

  return (
    <FormField>
      <div key={id}>
        <div className="flex flex-col mb-4">
          <CountdownTimer />
        </div>

        <blockquote className="max-w-md mx-auto text-center font-semibold text-xl leading-relaxed text-zinc-700 tracking-tight mt-12">
          {question}
        </blockquote>

        <div className="flex flex-col gap-4 my-8">
          {Object.entries(options).map(([key, value]) => (
            <Quiz
              key={`${id}-${key}`}
              alpha={key}
              id={+id}
              text={value}
              answer={answer}
              // onSetAnswer={setSelectedAnswer}
            />
          ))}
        </div>

        <em className="block not-italic text-sm font-geistmono text-center">
          <span className="text-green-500">Correct!</span> The answer is{" "}
          <span className="font-bold">&#40;B&#41;</span>
        </em>

        <button className="flex mx-auto mt-16 bg-primary hover:bg-secondary text-white text-center px-4 py-3 rounded-full duration-200">
          Next Question
        </button>
      </div>
    </FormField>
  );
}
