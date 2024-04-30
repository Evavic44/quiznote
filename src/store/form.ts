import { create } from "zustand";

type StreamStatus = "idle" | "streaming" | "done";

interface StoreState {
  status: StreamStatus;
}

interface StoreActions extends StoreState {
  setStatus: (status: StreamStatus) => void;
}

export const useFormStore = create<StoreState & StoreActions>((set) => ({
  status: "idle",
  setStatus: (status) => set({ status }),
}));
