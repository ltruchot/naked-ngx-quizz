import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AnwserComponent } from './anwser/anwser.component';
import { HttpClientModule } from '@angular/common/http';
import { ScorePipe } from './pipes/score.pipe';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    AnwserComponent,
    ScorePipe,
    TranslatePipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
