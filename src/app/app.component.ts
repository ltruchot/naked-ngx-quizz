import { Component } from '@angular/core';
const { version } = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Quizz generator';
  version: string = version;
  constructor() {}
}
