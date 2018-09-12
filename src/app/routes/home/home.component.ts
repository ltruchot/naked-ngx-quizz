import { Component, OnInit } from '@angular/core';
import { shuffle } from '@helpers/array.helper';
import { Observable } from 'rxjs';
import { IQuizz, IQuizzItem } from '@models/quizz.model';
import { ScoreService } from '@services/score.service';
import { combineLatest, map, tap } from 'rxjs/operators';
import { HttpService } from '@services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  today: Date = new Date();
  isStarted: boolean = false;
  theme: string;
  user: string;
  herbalQuizz$: Observable<IQuizz[]>;
  theme$: Observable<string>;
  private score: number = 0;
  constructor(
    private _httpService: HttpService,
    public scoreService: ScoreService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.theme$ = this.route.paramMap.pipe(
      tap(console.log),
      map(params => params.get('theme') || 'herbalism'),
      tap(theme => setTimeout(() => (this.theme = theme), 0)),
    );
    this.herbalQuizz$ = this._httpService.get<IQuizzItem[]>('quizz').pipe(
      combineLatest(this.theme$),
      tap(([quizz, theme]: [IQuizzItem[], string]) =>
        console.log('quizz', quizz, 'theme', theme),
      ),
      map(([quizz, theme]: [IQuizzItem[], string]) =>
        this.formatQuizz(quizz.filter(item => item.theme === theme)),
      ),
    );
  }

  startGame(): void {
    this.isStarted = true;
    // CHA service
    // ----
    this.scoreService.answerNumber = 0;
    this.scoreService.score = 0;
    // ----
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
