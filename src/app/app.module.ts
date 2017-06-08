import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AnswerPartComponent } from './question/answer-part/answer-part.component';
import { QuestionPartComponent } from './question/question-part/question-part.component';
import { DataModelService } from './data-model.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerPartComponent,
    QuestionPartComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [DataModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
