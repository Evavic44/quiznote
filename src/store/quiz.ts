import { create } from "zustand";
import { QuizType } from "../../types";

interface StoreState {
  quizzes: QuizType[];
  index: number;
  selectedAnswer: string;
  timer: number;
  points: number;
}

interface StoreActions extends StoreState {
  setQuizzes: (quizzes: QuizType[]) => void;
  setIndex: (index: number) => void;
  setSelectedAnswer: (index: string) => void;
  setTimer: (index: number) => void;
  setPoints: (points: number) => void;
}

export const useQuizStore = create<StoreState & StoreActions>((set) => ({
  quizzes: [],
  index: 0,
  selectedAnswer: "",
  timer: 5,
  points: 0,
  setQuizzes: (quizzes) => set({ quizzes }),
  setIndex: (index) => set({ index }),
  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
  setTimer: (timer) => set({ timer }),
  setPoints: (points) => set((state) => ({ points: state.points + points })),
}));
