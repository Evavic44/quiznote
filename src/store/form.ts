import { create } from "zustand";

interface FormState {
  topic: string;
  note: string;
  file: string;
  timer: number;
  quizCount: number;
  difficulty: string;
}

interface StoreState {
  form: FormState;
  status: string;
}

interface StoreActions extends StoreState {
  // setTopic: (topic: string) => void;
  // setNote: (note: string) => void;
  // setFile: (file: string) => void;
  // setTimer: (timer: number) => void;
  // setQuizCount: (quizCount: number) => void;
  // setDifficulty: (difficulty: string) => void;
  setForm: (form: FormState) => void;
  setStatus: (status: string) => void;
}

export const useFormStore = create<StoreState & StoreActions>((set) => ({
  // form: [
  //   {
  //     topic: "Introduction to Programming",
  //     note: "This is just a simple test",
  //     file: "./data/iteration-in-python.pdf",
  //     timer: 10, // 10, 15, 20
  //     difficulty: "easy", // "easy", "moderate", "hard"
  //     quizCount: 5, // 10, 15, 20
  //   },
  // ],
  form: {
    topic: "Introduction to Programming",
    note: "This is just a simple test",
    file: "./data/iteration-in-python.pdf",
    timer: 10, // 10, 15, 20
    difficulty: "easy", // "easy", "moderate", "hard"
    quizCount: 5, // 10, 15, 20
  },
  status: "input", // 'input',  'loading', 'active', 'error', 'final'
  // setTopic: (topic) => set((state) => ({ form: { ...state.form, topic } })),
  // setNote: (note) => set((state) => ({ form: { ...state.form, note } })),
  // setFile: (file) => set((state) => ({ form: { ...state.form, file } })),
  // setTimer: (timer) => set((state) => ({ form: { ...state.form, timer } })),
  // setQuizCount: (quizCount) =>
  //   set((state) => ({ form: { ...state.form, quizCount } })),
  // setDifficulty: (difficulty) =>
  //   set((state) => ({ form: { ...state.form, difficulty } })),
  setForm: (newForm) => set((state) => ({ form: { ...state.form, newForm } })),
  setStatus: (status) => set({ status }),
}));
