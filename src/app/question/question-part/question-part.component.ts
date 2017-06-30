import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { QuestionPart } from "./question-part";

@Component({
  selector: 'app-question-part',
  templateUrl: './question-part.component.html',
  styleUrls: ['./question-part.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': `col-md-2`
  }
})
export class QuestionPartComponent implements OnInit {

  constructor() { }
  @Input() compData: QuestionPart;
  @Input() type: any;
  class: any;
  ngOnInit() {
  }
}
