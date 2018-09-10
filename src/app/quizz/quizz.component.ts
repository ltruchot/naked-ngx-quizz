import { Component, Input, OnInit } from '@angular/core';
import { IQuizzItem } from '../models/quizz.model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit {
  @Input()
  content: IQuizzItem[];
  constructor() {}

  ngOnInit() {}
}
