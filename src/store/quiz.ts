import { create } from "zustand";
import { QuizType } from "../../types";

interface StoreState {
  quizzes: QuizType[];
  index: number;
  selectedAnswer: string;
  timer: number;
  totalPoints: number;
  points: number;
}

interface StoreActions extends StoreState {
  setQuizzes: (quizzes: QuizType[]) => void;
  nextIndex: () => void;
  setSelectedAnswer: (index: string) => void;
  setTimer: (index: number) => void;
  addPoints: () => void;
  reset: () => void;
}

const initialState = {
  quizzes: [],
  index: 0,
  selectedAnswer: "",
  timer: 5,
  points: 1,
  totalPoints: 0,
};

export const useQuizStore = create<StoreState & StoreActions>((set) => ({
  ...initialState,
  setQuizzes: (quizzes) => set({ quizzes, points: 100 / quizzes.length }),
  nextIndex: () =>
    set((state) => ({
      index:
        state.index + 1 === state.quizzes.length
          ? state.index
          : state.index + 1,
      selectedAnswer: "",
    })),
  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
  setTimer: (timer) => set({ timer }),
  addPoints: () =>
    set((state) => ({ totalPoints: state.totalPoints + state.points })),
  reset: () =>
    set({
      ...initialState,
    }),
}));
