"use client";
import { useQuizStore } from "@/store/quiz";

export default function ScoreLine() {
  const points = useQuizStore((state) => state.totalPoints);

  return (
    <div>
      Points: {points}
      <input
        type="range"
        name=""
        id=""
        value={points}
        max={100}
        disabled
        onChange={() => {}}
        className="bg-primary"
      />
    </div>
  );
}
