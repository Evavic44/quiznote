import { ChangeEvent, useState } from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    setCount(Number(e.target.value));
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value));
  };

  return (
    <div className="flex flex-col self-center text-center gap-4 pt-6">
      <time
        dateTime=""
        className="font-geistmono text-zinc-800 sm:text-4xl text-3xl font-bold tracking-widest border border-zinc-300 rounded-full px-8 py-4"
      >
        10:00
      </time>
      <span className="tet-xs text-zinc-500">Countdown</span>
    </div>
  );
}
