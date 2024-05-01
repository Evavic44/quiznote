import { useEffect, useState } from "react";

interface TimerProps {
  minutes: number;
}

export default function CountdownTimer({ minutes }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const displayMinutes = Math.floor(timeLeft / 60);
  const displaySeconds = timeLeft % 60;

  return (
    <div className="flex flex-col self-center text-center gap-4 pt-6">
      <time
        dateTime=""
        className="font-geistmono text-zinc-800 sm:text-4xl text-3xl font-bold tracking-widest border border-zinc-300 rounded-full px-8 py-4"
      >
        {`${displayMinutes < 10 ? "0" + displayMinutes : displayMinutes}:${
          displaySeconds < 10 ? "0" + displaySeconds : displaySeconds
        }`}
      </time>
      <span className="tet-xs text-zinc-500">Countdown</span>
    </div>
  );
}
