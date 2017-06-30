import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild ,OnChanges,DoCheck, KeyValueDiffers } from '@angular/core';

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
export class QuestionComponent implements OnInit,OnChanges  {
  differ: any;
  constructor(private differs: KeyValueDiffers,private _componentFactoryResolver: ComponentFactoryResolver, private formValidationService: FormValidationService, private viewContainerRef: ViewContainerRef) {


		this.differ = differs.find({}).create(null);

    this.form = this.formValidationService.getFormGroup();


  }
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @Input() compData: Question;
  form: FormGroup;

  ngOnInit() {
    if (!(this.compData && this.compData.key)) return;
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
  
  ngOnChanges(changes) {
    console.log(changes);
    // changes.prop contains the old and the new value...
  }
  /*ngDoCheck() {
		var changes = this.differ.diff(this.compData);
		if(changes) {
    
      var needRepaint = false;
			changes.forEachChangedItem(r => {
        if (r.key == "type") {needRepaint = true};});
        
        if (needRepaint){
          this.container.clear();
          this.ngOnInit();
        }

		} 
	}*/

}
