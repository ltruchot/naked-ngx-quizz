import {
  Component,
  EventEmitter, // CHA service
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, // CHA service
  SimpleChanges
} from '@angular/core';
import { IQuizz } from '../models/quizz.model';
import { shuffle } from '../helpers/array.helper';
import { ScoreService } from '../services/score.service'; /* CHA service*/

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
})
export class QuizzComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  content: IQuizz[];
  @Output()
  stop: EventEmitter<void> = new EventEmitter();
  currentItems: IQuizz[];
  displayedItem: IQuizz;
  dirty: boolean = false;
  constructor(/* CHA  service*/ private _scoreService: ScoreService) {}

  ngOnInit(): void {
    console.log('quizz init !');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('quizz change !');
    const { content } = changes;
    if (content && content.currentValue && content.currentValue.length) {
      this.displayNextItem();
    }
  }
  displayNextItem(): void {
    // CHA service
    // ----
    if (this._scoreService.answerNumber >= 10) {
      this.stop.emit();
    }
    // ----
    if (this.currentItems && this.currentItems.length) {
      this.displayedItem = this.currentItems.splice(-1, 1)[0];
    } else {
      this.currentItems = shuffle([...this.content]);
      this.displayNextItem();
    }
  }
  getDirtyBgColor(index: number): string {
    if (!this.dirty) {
      return 'white';
    }
    return this.displayedItem.rightIndex === index ? 'green' : 'red';
  }
  handleAnswerClick(index: number): void {
    this.dirty = true;
    setTimeout(() => {
      window.alert(index === this.displayedItem.rightIndex ? 'bravo' : 'wrong');
      this.displayNextItem();
      this.dirty = false;
    }, 0);

    // CHA service
    // ----
    if (index === this.displayedItem.rightIndex) {
      this._scoreService.score++;
    }
    this._scoreService.answerNumber++;
    // ----
  }
  ngOnDestroy(): void {
    console.log('quizz destroyed !');
  }
}
