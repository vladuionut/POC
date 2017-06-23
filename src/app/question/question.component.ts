import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { AnswerPartComponent } from './answer-part/answer-part.component';

import { QuestionPartComponent } from './question-part/question-part.component';


import { Question } from './question';

@Component({
  selector: 'Question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  entryComponents: [AnswerPartComponent, QuestionPartComponent]

})
export class QuestionComponent implements OnInit {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }
  @Input() compData: Question;
  ngOnInit() {

    let AnswerPartComponentFactory = this._componentFactoryResolver.resolveComponentFactory(AnswerPartComponent);
    let QuestionPartComponentFactory = this._componentFactoryResolver.resolveComponentFactory(QuestionPartComponent);

    this.viewContainerRef.createComponent(AnswerPartComponentFactory);

    let componentRef = this.viewContainerRef.createComponent(QuestionPartComponentFactory);

    Object.assign(componentRef.instance,{compData : this.compData ? this.compData.questionPart:""});


  }


}
