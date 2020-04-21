import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {
  @ViewChild('plans') plans: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(target) {
    console.log(target);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }




}
