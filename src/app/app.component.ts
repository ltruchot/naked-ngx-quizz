import { Component, OnInit } from '@angular/core';
import { IAppInfos } from './models/app.model';
import { herbalQuizzItems } from './values/quizz.value';
import { IQuizz, IQuizzItem } from './models/quizz.model';
import { shuffle } from './helpers/array.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Quizz generator';
  isStarted: boolean = false;
  appInfos: IAppInfos = {
    version: 1,
    theme: 'herbalism',
  };
  user: string;
  herbalQuizz: IQuizz[];
  private score: number = 0;
  ngOnInit(): void {
    this.herbalQuizz = this.formatQuizz(herbalQuizzItems);
    console.log(this.herbalQuizz);
  }

  startGame(): void {
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
