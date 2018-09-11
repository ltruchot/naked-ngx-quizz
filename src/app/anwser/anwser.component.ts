import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-anwser',
  templateUrl: './anwser.component.html',
  styles: [],
})
export class AnwserComponent {
  @Input()
  text: string;
  @Input()
  index: number;
  @Output()
  clicked: EventEmitter<number> = new EventEmitter();
  constructor() {}

  emitIndex(evt: MouseEvent): void {
    evt.stopPropagation();
    evt.preventDefault();
    this.clicked.emit(this.index);
  }
}
