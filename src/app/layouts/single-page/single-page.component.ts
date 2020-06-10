import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit, AfterViewInit {
  @ViewChild('planes') planes: ElementRef;
  @ViewChild('contacto') contacto: ElementRef;
  @ViewChild('nosotros') nosotros: ElementRef;
  @ViewChild('servicios') servicios: ElementRef;
  private state$: Observable<object>;
  constructor(private activatedRoute: ActivatedRoute) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const el = this.activatedRoute.snapshot.queryParamMap.get('scroll');
      switch (el) {
          case 'contacto':
              this.contacto.nativeElement.scrollIntoView({block: 'center'});
              break;
      }
  }, 700);
  }

  ngOnInit(): void {
  }

  scroll(target) {
    switch (target) {
      case 'planes':
        this.planes.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case 'nosotros':
        this.nosotros.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case 'contacto':
        this.contacto.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case 'servicios':
        this.servicios.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
    }
  }

  somefunction(data) {
    this.scroll(data);
  }




}
