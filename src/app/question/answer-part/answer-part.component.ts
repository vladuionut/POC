import { Component, OnInit,Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FormValidationService } from '../../form-validation.service';


@Component({
  selector: 'app-answer-part',
  templateUrl: './answer-part.component.html',
  styleUrls: ['./answer-part.component.css']
})
export class AnswerPartComponent implements OnInit {

  constructor(private formValidationService: FormValidationService) {
    this.form = this.formValidationService.getFormGroup();
  }

  @Input() key: string;
  form: FormGroup;

  ngOnInit() {
  }
  get control(){
    return this.form.controls[this.key];
  }

}
