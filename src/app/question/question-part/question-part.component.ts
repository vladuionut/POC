import { Component, OnInit, Input } from '@angular/core';
import {QuestionPart} from "./question-part";

@Component({
  selector: 'app-question-part',
  templateUrl: './question-part.component.html',
  styleUrls: ['./question-part.component.css']
})
export class QuestionPartComponent implements OnInit {

  constructor() { }
  @Input() compData: QuestionPart;
  ngOnInit() {
  }

}
