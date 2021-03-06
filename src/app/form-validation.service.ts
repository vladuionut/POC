import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class FormValidationService {

  private _isSubmited: boolean = false;

  get isSubmited(): boolean {
    return this._isSubmited;
  }
  set isSubmited(value: boolean) {
    this._isSubmited = value;
  }
  
  private formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup({
      firstName: new FormControl()
    });
  }
  resetForm(){
      this._isSubmited = false;
        this.formGroup = new FormGroup({    });
  }
  getFormGroup() {
    return this.formGroup;
  }

  addControl(id: string, validators: any) {


    if (validators) {
      let arrValidators = validators.map(v => {
        if (v.name && Validators[v.name]) {
          if (v.value) {
            return Validators[v.name](v.value);
          }
          return Validators[v.name]
        }
        return false;
      }).filter(v => v != false);

      if (arrValidators.length) {
        if (arrValidators.length > 1) {
          this.formGroup.addControl(id, new FormControl('', Validators.compose(arrValidators)));
        }
        else {
          this.formGroup.addControl(id, new FormControl('', arrValidators[0]));
        }
      }
    } else {

      this.formGroup.addControl(id, new FormControl(''));
    }
  }
}
