export interface FormType {
  topic: string;
  note: string;
  file: string;
  difficulty: string;
  quizCount: number;
  timer: number;
}

export interface QuizType {
  id: string;
  question: string;
  description: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: string;
  resources: [{ title: string; link: string }];
}
