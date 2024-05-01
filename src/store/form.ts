import { create } from "zustand";

type StreamStatus = "idle" | "streaming" | "done" | "start" | "summary";

interface StoreState {
  status: StreamStatus;
  quizStream: string;
  setQuizStream: (stream: string) => void;
}

interface StoreActions extends StoreState {
  setStatus: (status: StreamStatus) => void;
}

export const useFormStore = create<StoreState & StoreActions>((set) => ({
  status: "idle",
  quizStream: "",
  setQuizStream: (stream) => set({ quizStream: stream }),
  setStatus: (status) => set({ status }),
}));
