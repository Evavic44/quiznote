import { create } from "zustand";
import { QuizType } from "../../types";

interface StoreState {
  quizzes: QuizType[];
  index: number;
  selectedAnswer: string;
  timer: number;
}

interface StoreActions extends StoreState {
  setQuizzes: (quizzes: QuizType[]) => void;
  nextIndex: () => void;
  setSelectedAnswer: (index: string) => void;
  setTimer: (index: number) => void;
}

export const useQuizStore = create<StoreState & StoreActions>((set) => ({
  quizzes: [],
  index: 0,
  selectedAnswer: "",
  timer: 5,
  setQuizzes: (quizzes) => set({ quizzes }),
  nextIndex: () =>
    set((state) => ({
      index:
        state.index + 1 === state.quizzes.length
          ? state.index
          : state.index + 1,
    })),
  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
  setTimer: (timer) => set({ timer }),
}));
