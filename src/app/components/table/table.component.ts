import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ec-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() compData;
  constructor() { }

  ngOnInit() {
  }
  keys: string[];
  ngOnChanges() {
    this.keys = Object.keys(this.compData.data[0]);
  }
  columnName(key){
    if (this.compData && this.compData.settings){
      if (this.compData.settings[key] && this.compData.settings[key].columnName){
          return this.compData.settings[key].columnName;
      }
    }
    return key;
  }
}
