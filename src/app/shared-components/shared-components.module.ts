import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../components/button/button.component';
import { QuestionComponent } from '../question/question.component';
import { AnswerPartComponent } from '../question/answer-part/answer-part.component';
import { ErrorPartComponent } from '../question/error-part/error-part.component';

import { QuestionPartComponent } from '../question/question-part/question-part.component';
import { InternationlCalendarComponent } from '../widgets/internationl-calendar/internationl-calendar.component';
import { ChartsComponent } from '../widgets/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule }          from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ChartsModule,ReactiveFormsModule
  ],
  declarations: [
    QuestionComponent,
    AnswerPartComponent,
    QuestionPartComponent,
    ErrorPartComponent,
    InternationlCalendarComponent,
    ButtonComponent,
    ChartsComponent],
  exports: [
    QuestionComponent,
    AnswerPartComponent,
    QuestionPartComponent,
    ErrorPartComponent,
    InternationlCalendarComponent,
    ButtonComponent,
    ChartsComponent]
})
export class SharedComponentsModule { }