import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'Charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() compData: any;
  constructor() { }

  ngOnInit() {
    debugger;
    this.barChartData = this.compData.barChartData;
    this.barChartLabels = this.compData.barChartLabels;
    this.barChartLegend = this.compData.barChartLegend;
    this.barChartType = this.compData.barChartType;
    this.barChartOptions = this.compData.barChartOptions;

  }
  public barChartOptions;
  public barChartLabels:string[];
  public barChartType:string;
  public barChartLegend:boolean;
 
  public barChartData:any[];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
