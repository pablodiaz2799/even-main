import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  private message = 'Hola Mundo!';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log('haha');
    this.messageEvent.emit(this.message)
  }

}
