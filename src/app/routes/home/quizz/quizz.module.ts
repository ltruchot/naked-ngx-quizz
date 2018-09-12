import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './quizz.component';
import { AnwserComponent } from './anwser/anwser.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizzComponent, AnwserComponent],
  exports: [QuizzComponent],
})
export class QuizzModule {}
