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
        this.localDB['QUE_ID_1'].questionPart.displayText = "UPDATED THROUGH CHANGE DETECTION MECHANISM";
      }
      update() {
        this.dataModelService.getDataFromServer(phaseId).subscribe(data => {
          Object.assign(this.localDB, data);
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
