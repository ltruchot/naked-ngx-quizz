import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzModule } from '@app/routes/home/quizz/quizz.module';
import { HomeComponent } from './home.component';
import { ScorePipe } from '@pipes/score.pipe';
import { TranslatePipe } from '@pipes/translate.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, QuizzModule, FormsModule],
  declarations: [HomeComponent, ScorePipe, TranslatePipe],
})
export class HomeModule {}
