import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../components/button/button.component';
import { QuestionComponent } from '../question/question.component';
import { AnswerPartComponent } from '../question/answer-part/answer-part.component';
import { ErrorPartComponent } from '../question/error-part/error-part.component';
import {DynamicComponent} from '../components/dynamic-component/dynamic-component.component';

import { AotPhaseComponent } from '../components/aot-phase/aot-phase.component';

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
    DynamicComponent,
    InternationlCalendarComponent,
    ButtonComponent,
    ChartsComponent,
    AotPhaseComponent],
  exports: [
    QuestionComponent,
    AnswerPartComponent,
    QuestionPartComponent,
    ErrorPartComponent,
    InternationlCalendarComponent,
    ButtonComponent,
    ChartsComponent,
    DynamicComponent,
    AotPhaseComponent]
})
export class SharedComponentsModule { }