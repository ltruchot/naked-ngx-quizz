import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AnwserComponent } from './anwser/anwser.component';

@NgModule({
  declarations: [AppComponent, QuizzComponent, AnwserComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
