import { Component, OnInit } from '@angular/core';
import { IAppInfos } from './models/app.model';
import { herbalQuizzItems } from './values/quizz.value';
import { IQuizz, IQuizzItem } from './models/quizz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Quizz generator';
  isStarted = false;
  appInfos: IAppInfos = {
    version: 1,
    theme: 'herbalism',
  };
  user: string;
  herbalQuizz: IQuizz[];
  private score = 0;
  ngOnInit() {
    this.herbalQuizz = this.formatQuizz(herbalQuizzItems);
  }

  startGame() {
    this.isStarted = true;
  }

  endGame() {
    window.alert(`Game over ${this.user}. Score: ${this.score}`);
    this.isStarted = false;
  }

  formatQuizz(quizzItems: IQuizzItem[]): IQuizz[] {
    return quizzItems.map(({ question, answer }) => {
      // get all other answer
      const otherAnswer = quizzItems
        .map(item => item.answer)
        .filter(a => a !== answer);
      // shuffle them and keep the first 3 + the correct
      this.shuffle(otherAnswer);
      const answers = [...otherAnswer.slice(0, 3), answer];
      this.shuffle(answers);
      return {
        question,
        answers,
        rightIndex: answers.findIndex(a => a === answer),
      };
    });
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
