import { Component, OnInit, Input, NgModule, Compiler, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { DataModelService } from '../../data-model.service';
import { BroadcasterService } from '../../broadcaster.service';
import { FormValidationService } from '../../form-validation.service';


@Component({
  selector: 'dynamic-component',
  template: '',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponent implements OnInit {
  @Input() compId: String;
  constructor(private container: ViewContainerRef, private dataModelService: DataModelService, private broadcasterService: BroadcasterService, private formValidationService: FormValidationService, private compiler: Compiler) {

  }


  ngOnInit() {
    this.dataModelService.getCurrentPhaseTemplate(this.compId).subscribe(template => {
      this.dataModelService.getDataFromServer(this.compId).subscribe(compData => {
        this.createDynamicComponent(template, compData);
      });
    });
  }

  private createDynamicComponent(template: string, compData) {

    @Component({ template: template })
    class PhaseComponent {
      localDB: any = compData;
      constructor(private dataModelService: DataModelService, private formValidationService: FormValidationService, private broadcasterService: BroadcasterService) { }
      ngOnInit() {

      }
      getDataFor(id) {
        if (this.localDB && this.localDB[id]) {
          return this.localDB[id];
        }
        return false;

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
}
