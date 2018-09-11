// CHA: create your own service
// ----
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  score: number = 0;
  answerNumber: number = 0;
  constructor() {}
  get winRate(): number {
    return this.score / this.answerNumber;
  }
}
// ---
