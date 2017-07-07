import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { QuestionComponent } from '../../../question/question.component';
import { DynamicComponent}from '../../dynamic-component/dynamic-component.component';


@Component({
  selector: 'Cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
    entryComponents: [QuestionComponent,DynamicComponent]
})
export class CellComponent implements OnInit {
  @Input() settings: any;
  @Input() data: any;

  private componentRef: ComponentRef<{}>;
  private mappings = {
    'question': QuestionComponent,
    'd-comp':DynamicComponent,
    'text':false
  };
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.settings && this.settings.type && this.mappings[this.settings.type]) {
      let componentType = this.getComponentType(this.settings.type);

      // note: componentType must be declared within module.entryComponents
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      if (this.settings.type == "d-comp"){
      Object.assign(this.componentRef.instance, { compId: this.data });
      }else {
      Object.assign(this.componentRef.instance, { compData: this.data });
      }

    }
  }
  getComponentType(typeName: string) {
    debugger;
    let type = this.mappings[typeName];
    return type || null;
  }

  ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    get isPlainHTML(){
      if ( !this.settings || !this.settings.type){
        return true;
      }

      return this.settings.type == "text";
    }
}

