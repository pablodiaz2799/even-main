import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-detail',
  templateUrl: './plans-detail.component.html',
  styleUrls: ['./plans-detail.component.css']
})
export class PlansDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('content1') content1: ElementRef;
  @ViewChild('content2') content2: ElementRef;
  @ViewChild('content3') content3: ElementRef;
  @ViewChild('btn1') btn1: ElementRef;
  @ViewChild('btn2') btn2: ElementRef;
  @ViewChild('btn3') btn3: ElementRef;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.btn1.nativeElement.style.backgroundColor = '#0dbbd8';
    this.content2.nativeElement.style.display = 'none';
    this.content3.nativeElement.style.display = 'none';
  }

  selectContent(num) {
    switch (num) {
      case 1:
        this.content1.nativeElement.style.display = 'flex';
        this.btn1.nativeElement.style.backgroundColor = '#0dbbd8';
        this.btn2.nativeElement.style.backgroundColor = 'white';
        this.btn3.nativeElement.style.backgroundColor = 'white';
        this.content2.nativeElement.style.display = 'none';
        this.content3.nativeElement.style.display = 'none';
        break;
      case 2:
        this.content2.nativeElement.style.display = 'flex';
        this.btn2.nativeElement.style.backgroundColor = '#0dbbd8';
        this.btn1.nativeElement.style.backgroundColor = 'white';
        this.btn3.nativeElement.style.backgroundColor = 'white';
        this.content1.nativeElement.style.display = 'none';
        this.content3.nativeElement.style.display = 'none';
        break;
      case 3:
        this.content3.nativeElement.style.display = 'flex';
        this.btn3.nativeElement.style.backgroundColor = '#0dbbd8';
        this.btn2.nativeElement.style.backgroundColor = 'white';
        this.btn1.nativeElement.style.backgroundColor = 'white';
        this.content2.nativeElement.style.display = 'none';
        this.content1.nativeElement.style.display = 'none';
        break;
    }
  }

  ngOnInit(): void {
  }

}
