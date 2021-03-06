import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FormValidationService } from '../../form-validation.service';

import { ErrorPart } from './error-part';

@Component({
  selector: 'app-error-part',
  templateUrl: './error-part.component.html',
  styleUrls: ['./error-part.component.css'],
  host: {
    'class': 'col-md-12'
  }
})
export class ErrorPartComponent implements OnInit {
  @Input() key: string;
  form: FormGroup;

  @Input() compData: ErrorPart;
  constructor(private formValidationService: FormValidationService) {
    this.form = this.formValidationService.getFormGroup();
  }

  ngOnInit() {
  }
  get message(){
      let control = this.form.controls[this.key];
      let message = "";
      if (control.errors){
          for (var error in control.errors) {
            message = this.compData[error];
            break;
        }
      }
    return message;
  }
  get isValid() {
    let control = this.form.controls[this.key];
    if (control.errors && (control.dirty || control.touched || this.formValidationService.isSubmited )) {
      return this.form.controls[this.key].valid;
    }
    return true;
  }
}
