import { Component, OnInit,ElementRef,ViewEncapsulation } from '@angular/core';
import * as $ from "jquery";
import *  as cal from "./js/datepicker.js";

console.log(cal);

@Component({
  selector: 'internationl-calendar',
  templateUrl: './internationl-calendar.component.html',
  styleUrls: ['./css/datepicker.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternationlCalendarComponent implements OnInit {



  ngOnInit() {
  }
 constructor(private el: ElementRef) {}
 ngAfterViewInit() {
   (<any>$(this.el.nativeElement)).datepicker();
 }
}
