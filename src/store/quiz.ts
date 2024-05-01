import { create } from "zustand";
import { QuizType } from "../../types";

interface StoreState {
  quizzes: QuizType[];
  index: number;
  selectedAnswer: string;
}

interface StoreActions extends StoreState {
  setQuizzes: (quizzes: QuizType[]) => void;
  setIndex: (index: number) => void;
  setSelectedAnswer: (index: string) => void;
}

export const useQuizStore = create<StoreState & StoreActions>((set) => ({
  quizzes: [],
  index: 0,
  selectedAnswer: "",
  setQuizzes: (quizzes) => set({ quizzes }),
  setIndex: (index) => set({ index }),
  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
}));
