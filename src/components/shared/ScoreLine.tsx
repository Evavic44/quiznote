import { useQuizStore } from "@/store/quiz";

export default function ScoreLine() {
  const points = useQuizStore((state) => state.points);

  return (
    <div>
      Points: {points}
      <input type="range" name="" id="" className="bg-primary" />
    </div>
  );
}
