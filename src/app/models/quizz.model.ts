export interface IQuizzItem {
  question: string;
  answer: string;
  theme: string;
}
export interface IQuizz {
  question: string;
  answers: string[];
  rightIndex: number;
}
