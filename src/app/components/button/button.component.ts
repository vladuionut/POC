import { Component, OnInit,Input } from '@angular/core';

import { BroadcasterService } from '../../broadcaster.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() compData: any;
  constructor(private broadcasterService: BroadcasterService) { }

  ngOnInit() {
  }
  myEvent($event){
    
    this.broadcasterService.broadcast(this.compData.actionType,this.compData.actionValue);
    console.log($event);
  }

}