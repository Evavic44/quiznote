import { Dispatch, SetStateAction, useState } from "react";
import TabComponent from "@/components/shared/TabComponent";
import FileNote from "@/components/pages/FileNote";
import TextNote from "@/components/pages/TextNote";
import FormField from "@/components/pages/FormField";

export default function Form({
  onSubmit,
  timer,
  onSetTimer,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  timer: number;
  onSetTimer: (index: number) => void;
}) {
  const [step, setStep] = useState(0);

  return (
    <FormField>
      <form onSubmit={onSubmit}>
        <header className="text-center mb-10">
          <h2 className="text-lg font-semibold mb-1">Add Notes</h2>
          <p className="text-xs text-zinc-400">
            Paste your notes as text or upload a file
          </p>
        </header>
        <div className="flex flex-col gap-3 mb-4">
          <TabComponent step={step} onSetStep={setStep}>
            <label htmlFor="topic" className="block mb-3">
              <span className="block text-sm font-semibold text-zinc-600 mb-2">
                Topic
              </span>
              <input
                type="text"
                name="topic"
                id="topic"
                placeholder="Object-oriented programming in Java"
                className="font-geistmono appearance-none w-full p-3 border border-zinc-200 placeholder-zinc-400 text-zinc-700 rounded-md focus:outline-none focus:ring-zinc-300 text-sm"
              />
            </label>
            {step === 0 ? <TextNote /> : <FileNote />}
          </TabComponent>
        </div>

        <fieldset className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-8 mb-10">
          <label htmlFor="difficulty">
            <p className="text-sm mb-2 text-zinc-500">
              Select difficulty level
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs text-sm"
              name="difficulty"
              id="difficulty"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label htmlFor="quizCount">
            <p className="text-sm mb-2 text-zinc-500">
              How many quizzes do you want to generate?
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs text-sm"
              name="quizCount"
              id="quizCount"
            >
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>

          <label htmlFor="timer">
            <p className="text-sm mb-2 text-zinc-500">Completion Time</p>

            <select
              className="font-geistmono block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs text-sm"
              name="timer"
              id="timer"
              value={timer}
              onChange={(e) => onSetTimer(+e.target.value)}
            >
              <option value="1">1 min</option>
              <option value="5">5 min</option>
              <option value="10">10 min </option>
              <option value="15">15 min</option>
            </select>
          </label>
        </fieldset>

        <button className="flex items-center justify-center w-full text-center max-w-lg mx-auto duration-200 text-sm gap-x-2 bg-primary hover:bg-secondary text-white font-medium px-4 py-3 rounded-full">
          Generate Quiz
        </button>
      </form>
    </FormField>
  );
}
