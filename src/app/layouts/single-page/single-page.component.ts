import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {
  @ViewChild('planes') planes: ElementRef;
  @ViewChild('contacto') contacto: ElementRef;
  @ViewChild('nosotros') nosotros: ElementRef;
  @ViewChild('servicios') servicios: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  scroll(target) {
    switch(target){
      case 'planes':
        this.planes.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 'nosotros':
        this.nosotros.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 'contacto':
        this.contacto.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 'servicios':
        this.servicios.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
  }

  somefunction(data){
    this.scroll(data);
  }




}
