import { Component } from '@angular/core';
import { IAppInfos } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Quizz generator';
  isStarted = false;
  appInfos: IAppInfos = {
    version: 1,
    theme: 'herbalism',
  };
  user: string;
  private score = 0;

  startGame() {
    this.isStarted = true;
  }

  endGame() {
    window.alert(`Game over ${this.user}. Score: ${this.score}`);
    this.isStarted = false;
  }
}
