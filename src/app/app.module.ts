import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScorePipe } from '@pipes/score.pipe';
import { TranslatePipe } from '@pipes/translate.pipe';
import { QuizzModule } from '@app/core/components/quizz/quizz.module';

@NgModule({
  declarations: [AppComponent, ScorePipe, TranslatePipe],
  imports: [BrowserModule, FormsModule, HttpClientModule, QuizzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
