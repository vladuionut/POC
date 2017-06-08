import { Component, OnInit } from '@angular/core';
import { DataModelService } from './data-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  localDB: any;
  constructor(private dataModelService: DataModelService) {

  }
  ngOnInit() {
    this.dataModelService.getDataFromServer('phase1').subscribe(data => {
      this.localDB = data
    });
  }
  getDataFor(id) {
    if (this.localDB && this.localDB[id]) {
      return this.localDB[id];
    }
    return false;
  }
  setData(){
     this.localDB['QUE_ID_1'].questionPart.displayText = "UPDATED THROUGH CHANGE DETECTION MECHANISM";
  }
}
