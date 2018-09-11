import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IQuizz } from '../models/quizz.model';
import { shuffle } from '../helpers/array.helper';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit, OnDestroy {
  @Input()
  content: IQuizz[];
  currentItems: IQuizz[];
  displayedItem: IQuizz;

  dirty = false;
  constructor() {}

  getDirtyBgColor(index: number): string {
    if (!this.dirty) {
      return 'white';
    }
    return this.displayedItem.rightIndex === index ? 'green' : 'red';
  }

  ngOnInit() {
    console.log('quizz init !');
    this.displayNextItem();
  }
  displayNextItem() {
    if (this.currentItems && this.currentItems.length) {
      this.displayedItem = this.currentItems.splice(-1, 1)[0];
    } else {
      this.currentItems = shuffle([...this.content]);
      this.displayNextItem();
    }
  }
  handleAnswerClick(index: number) {
    this.dirty = true;
    setTimeout(() => {
      window.alert(index === this.displayedItem.rightIndex ? 'bravo' : 'wrong');
      this.displayNextItem();
      this.dirty = false;
    }, 0);
  }
  ngOnDestroy() {
    console.log('quizz destroyed !');
  }
}
