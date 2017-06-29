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
 

}
