import { Component, OnInit,Input } from '@angular/core';
import { DataModelService } from '../../data-model.service';
import { BroadcasterService } from '../../broadcaster.service';
import { FormValidationService } from '../../form-validation.service';

@Component({
  selector: 'app-aot-phase',
  templateUrl: './aot-phase.component.html',
  styleUrls: ['./aot-phase.component.css']
})
export class AotPhaseComponent implements OnInit {

       @Input() localDB: any;
  constructor(private dataModelService: DataModelService, private formValidationService: FormValidationService, private broadcasterService: BroadcasterService) { }
      ngOnInit() {
          this.dataModelService.getDataFromServer("phase4").subscribe(phaseData => {
    
        this.localDB = phaseData;
      });
        //this.update();
      }
      getDataFor(id) {
        if (this.localDB && this.localDB[id]) {
          return this.localDB[id];
        }
        return false;
      }
      
}
