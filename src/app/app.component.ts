import { Component } from '@angular/core';
import { IAppInfos } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Quizz generator';
  isStarted: boolean = false;
  appInfos: IAppInfos = {
    version: 1,
    theme: 'herbalism',
  };
  user: string;
  private score: number = 0;

  startGame(): void {
    this.isStarted = true;
  }

  endGame(): void {
    window.alert(`Game over ${this.user}. Score: ${this.score}`);
    this.isStarted = false;
  }
}
