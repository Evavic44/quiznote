import { useFormStore } from "@/store/form";
import { Dispatch, SetStateAction, useEffect } from "react";

interface TimerProps {
  minutes: number;
  timeLeft: number;
  setTimeLeft: Dispatch<SetStateAction<number>>;
}

export default function CountdownTimer({ timeLeft, setTimeLeft }: TimerProps) {
  const setStatus = useFormStore((state) => state.setStatus);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft]);

  const displayMinutes = Math.floor(timeLeft / 60);
  const displaySeconds = timeLeft % 60;

  const hasAlmostElapsed = displayMinutes === 0 && displaySeconds <= 20;
  const timeUp = displayMinutes === 0 && displaySeconds === 0;

  if (timeUp) setStatus("summary");

  return (
    <div className="flex flex-col self-center text-center gap-4 pt-6">
      <div className="flex items-center font-geistmono text-zinc-800 sm:text-4xl text-3xl font-bold tracking-widest border border-zinc-300 rounded-full px-8 py-4">
        <p>{displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}</p>:
        <p className={`${hasAlmostElapsed ? "text-error" : ""}`}>
          {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
        </p>
      </div>
      <span className="tet-xs text-zinc-500">Countdown</span>
    </div>
  );
}
