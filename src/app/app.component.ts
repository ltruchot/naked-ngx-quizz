import { Component, OnInit } from '@angular/core';
import { IAppInfos } from './models/app.model';
import { IQuizz, IQuizzItem } from './models/quizz.model';
import { shuffle } from './helpers/array.helper';
import { HttpService } from './services/http.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ScoreService } from './services/score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title: string = 'Quizz generator';
  today: Date = new Date();
  isStarted: boolean = false;
  appInfos: IAppInfos = {
    version: 1,
    theme: 'herbalism',
  };
  user: string;
  herbalQuizz$: Observable<IQuizz[]>;
  private score: number = 0;
  constructor(
    private _httpService: HttpService,
    public scoreService: ScoreService, /* CHA */
  ) {}
  ngOnInit(): void {
    this.herbalQuizz$ = this._httpService.get<IQuizzItem[]>('quizz').pipe(
      tap(res => console.log('res', res)),
      map((quizz: IQuizzItem[]) => this.formatQuizz(quizz)),
    );
  }

  startGame(): void {
    // CHA service
    // ----
    this.scoreService.answerNumber = 0;
    this.scoreService.score = 0;
    // ----
    this.isStarted = true;
  }

  endGame(): void {
    window.alert(`Game over ${this.user}. Score: ${this.score}`);
    this.isStarted = false;
  }

  formatQuizz(quizzItems: IQuizzItem[]): IQuizz[] {
    return quizzItems.map(({ question, answer }) => {
      // get all other answer
      const otherAnswer: string[] = quizzItems
        .map(item => item.answer)
        .filter(a => a !== answer);
      // shuffle them and keep the first 3 + the correct
      shuffle(otherAnswer);
      const answers: string[] = [...otherAnswer.slice(0, 3), answer];
      shuffle(answers);
      return {
        question,
        answers,
        rightIndex: answers.findIndex(a => a === answer),
      };
    });
  }
}
