import { create } from "zustand";
import { QuizType } from "../../types";

interface StoreState {
  quizzes: QuizType[];
}

interface StoreActions extends StoreState {
  setQuizzes: (quizzes: QuizType[]) => void;
}

export const useQuizStore = create<StoreState & StoreActions>((set) => ({
  quizzes: [],
  setQuizzes: (quizzes) => set({ quizzes }),
}));
