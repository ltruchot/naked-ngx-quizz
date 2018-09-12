export interface IQuizzItem {
  question: string;
  answer: string;
  theme: string;
  id?: number;
}
export interface IQuizz {
  question: string;
  answers: string[];
  rightIndex: number;
}
