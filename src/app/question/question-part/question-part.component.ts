import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { QuestionPart } from "./question-part";

@Component({
  selector: 'app-question-part',
  templateUrl: './question-part.component.html',
  styleUrls: ['./question-part.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles:[`app-question-part {
    width:16%;
    display: inline-block;
    vertical-align: middle;
  }`],
})
export class QuestionPartComponent implements OnInit {

  constructor() { }
  @Input() compData: QuestionPart;
  ngOnInit() {
  }

}
