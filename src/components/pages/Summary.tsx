"use client";

import { useFormStore } from "@/store/form";
import FormField from "./FormField";
import { useQuizStore } from "@/store/quiz";
import { useRouter } from "next/navigation";

export default function Summary() {
  const setStatus = useFormStore((state) => state.setStatus);
  const totalPoints = useQuizStore((state) => state.totalPoints);
  const reset = useQuizStore((state) => state.reset);
  const router = useRouter();

  return (
    <FormField>
      <header className="flex flex-col items-center justify-center text-center gap-8">
        <h1 className="font-geistmono text-xl font-bold my-6">
          Quiz Completed!
        </h1>
        <p className="text-sm text-zinc-600  max-w-sm">
          You scored {totalPoints} out of 100 points.
        </p>

        <blockquote className="font-geistmono font-bold tracking-widest text-5xl my-6">
          {totalPoints}/100
        </blockquote>

        <button
          onClick={() => {
            setStatus("idle");
            reset();
            router.push("/");
          }}
          className="min-w-28 min-h-10 mx-auto bg-primary hover:bg-secondary text-white place-content-center text-center px-8 py-3 rounded-full duration-200 mb-10"
        >
          Exit
        </button>
      </header>
    </FormField>
  );
}
