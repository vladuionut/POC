import { Component, ViewChild, ViewContainerRef, Compiler, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';

import { DataModelService } from './data-model.service';
import { BroadcasterService } from './broadcaster.service';
import { FormValidationService } from './form-validation.service';


import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup;
  template: string;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private dataModelService: DataModelService, private broadcasterService: BroadcasterService, private formValidationService: FormValidationService, private compiler: Compiler) {
    this.form = this.formValidationService.getFormGroup()
    this.broadcasterService.on('navigate')
      .subscribe(data => {
        this.navigateToPhase(data);
      });
    this.broadcasterService.on('submit')
      .subscribe(data => {
        this.submitForm();
      });

    this.broadcasterService.on('reset')
      .subscribe(data => {
        this.resetForm();
      });

  }

  ngOnInit() {
    this.navigateToPhase("phase1");
  }


  submitForm() {
    this.formValidationService.isSubmited = true;
    if (this.form.valid) {
      console.log("Form Submitted!", this.form.value);
    }
  }

  resetForm() {
    this.formValidationService.isSubmited = false;
    this.form.reset();
  }

  private createPhaseComponent(template: string, phaseId, phaseData) {



    var isObject = function (item) {
            return (item && typeof item === 'object' && !Array.isArray(item));
          }
          function mergeDeep(target, ...sources) {
            if (!sources.length) return target;
            const source = sources.shift();

            if (isObject(target) && isObject(source)) {
              for (const key in source) {
                if (isObject(source[key])) {
                  if (!target[key]) Object.assign(target, { [key]: {} });
                  mergeDeep(target[key], source[key]);
                } else {
                  Object.assign(target, { [key]: source[key] });
                }
              }
            }
            return mergeDeep(target, ...sources);
          }

    @Component({ template: template })
    class PhaseComponent {
      localDB: any = phaseData;
      constructor(private dataModelService: DataModelService, private formValidationService: FormValidationService, private broadcasterService: BroadcasterService) { }
      ngOnInit() {
        //this.update();
      }
      getDataFor(id) {
        if (this.localDB && this.localDB[id]) {
          return this.localDB[id];
        }
        return false;
      }
      setData() {


        Object.assign(this.localDB, { "QUE_ID_999": { "questionPart": { "displayText": "ihi23232" } } });
      }
      update() {
        this.dataModelService.getDataFromServer(phaseId).subscribe(data => {
          mergeDeep(this.localDB, data);
          //Object.assign(this.localDB, data);
        });
      }
      partialUpdate(){
        this.dataModelService.getDataFromServer('partialUpdate').subscribe(data => {
          mergeDeep(this.localDB, data);
          //Object.assign(this.localDB, data);
        });
      }
    }
    @NgModule({
      imports: [CommonModule, SharedComponentsModule],
      declarations: [PhaseComponent]
    })
    class TemplateModule {
    }

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === PhaseComponent
    );
    const component = this.container.createComponent(factory);
  }

  clearData() {
    this.container.clear();
    this.formValidationService.resetForm();
    this.form = this.formValidationService.getFormGroup();
  }
  navigateToPhase(phaseId) {
    this.clearData();
    this.dataModelService.getCurrentPhaseTemplate(phaseId).subscribe(data => {
      this.dataModelService.getDataFromServer(phaseId).subscribe(phaseData => {
        this.createPhaseComponent(data, phaseId, phaseData);
        this.template = data;
      });
    });
  }

}
