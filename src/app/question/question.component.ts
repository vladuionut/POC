import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

import { AnswerPartComponent } from './answer-part/answer-part.component';

import { QuestionPartComponent } from './question-part/question-part.component';


import { ErrorPartComponent } from './error-part/error-part.component';

import { FormValidationService } from '../form-validation.service';

import { FormGroup } from '@angular/forms';

import { Question } from './question';
import { QuestionType } from "./question-type.enum";
@Component({
  selector: 'Question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  entryComponents: [AnswerPartComponent, QuestionPartComponent, ErrorPartComponent]

})
export class QuestionComponent implements OnInit {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private formValidationService: FormValidationService, private viewContainerRef: ViewContainerRef) {


    this.form = this.formValidationService.getFormGroup();


  }
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @Input() compData: Question;
  form: FormGroup;

  ngOnInit() {
    if (!(this.compData && this.compData.key)) return;
    debugger;
    this.formValidationService.addControl(this.compData.key,this.compData.validation);
    let AnswerPartComponentFactory = this._componentFactoryResolver.resolveComponentFactory(AnswerPartComponent);
    let QuestionPartComponentFactory = this._componentFactoryResolver.resolveComponentFactory(QuestionPartComponent);
    let ErrorPartComponentFactory = this._componentFactoryResolver.resolveComponentFactory(ErrorPartComponent);


    switch (this.compData.type) {

      case QuestionType.Question1:
        {

          let componentRef = this.container.createComponent(QuestionPartComponentFactory);

          Object.assign(componentRef.instance, { compData: this.compData ? this.compData.questionPart : "" });

          let AnswerPartComponentFactoryRef = this.container.createComponent(AnswerPartComponentFactory);
          Object.assign(AnswerPartComponentFactoryRef.instance, { key: this.compData.key });


          let componentErrorRef = this.container.createComponent(ErrorPartComponentFactory);
          Object.assign(componentErrorRef.instance, { compData: this.compData ? this.compData.errorPart : "", key: this.compData.key });


        }
        break;
      case QuestionType.Question2:
        {
          let AnswerPartComponentFactoryRef = this.container.createComponent(AnswerPartComponentFactory);
          Object.assign(AnswerPartComponentFactoryRef.instance, { key: this.compData.key });


          let componentRef = this.container.createComponent(QuestionPartComponentFactory);

          Object.assign(componentRef.instance, { compData: this.compData ? this.compData.questionPart : "" });

          let componentErrorRef = this.container.createComponent(ErrorPartComponentFactory);
          Object.assign(componentErrorRef.instance, { compData: this.compData ? this.compData.errorPart : "", key: this.compData.key });


        }
        break;
      default: {

      }

    }

    if (this.compData.type == QuestionType.Question1) {

    }

  }


}
