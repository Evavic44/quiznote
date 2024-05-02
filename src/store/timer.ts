import { create } from "zustand";

interface StoreState {
  timer: number;
}

interface StoreActions {
  setTimer: (index: number) => void;
}

export const useTimerStore = create<StoreState & StoreActions>((set) => ({
  timer: 5,
  setTimer: (timer) => set({ timer }),
}));
