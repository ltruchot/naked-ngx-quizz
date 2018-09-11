import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from '@core/components/quizz/quizz.component';
import { AnwserComponent } from '@core/components/quizz/anwser/anwser.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizzComponent, AnwserComponent],
  exports: [QuizzComponent],
})
export class QuizzModule {}
