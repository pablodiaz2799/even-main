import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../../shared/animations/keyframes';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => slideOutLeft', animate(200, keyframes(kf.slideOutLeft))),
      transition('* => fadeOutLeft', animate(200, keyframes(kf.fadeOutLeft))),
      transition('* => fadeOutRight', animate(200, keyframes(kf.fadeOutRight))),
      transition('* => fadeInLeft', animate(200, keyframes(kf.fadeInLeft))),
      transition('* => fadeInRight', animate(200, keyframes(kf.fadeInRight))),
    ])
  ]
})
export class PlansComponent implements OnInit, AfterViewInit {
  animationState1: string;
  animationState2: string;
  animationState3: string;
  screenHeight = 0;
  screenWidth = 0;
  @ViewChild('card1') card1: ElementRef;
  @ViewChild('card2') card2: ElementRef;
  @ViewChild('card3') card3: ElementRef;
  @ViewChild('dot1') dot1: ElementRef;
  @ViewChild('dot2') dot2: ElementRef;
  @ViewChild('dot3') dot3: ElementRef;
  cards = [this.card1,this.card2,this.card3];
  constructor() { }
  ngAfterViewInit(): void {
    this.onResize();
    this.dot1.nativeElement.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
  }


  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth <= 480 && window.innerWidth !== this.screenWidth) {
      this.card1.nativeElement.style.display = 'block';
      this.card2.nativeElement.style.display = 'none';
      this.card3.nativeElement.style.display = 'none';
      this.dot1.nativeElement.style.backgroundColor = 'white';
      this.dot2.nativeElement.style.backgroundColor = 'gray';
      this.dot3.nativeElement.style.backgroundColor = 'gray';
    } else if (window.innerWidth > 480 ){
      this.card1.nativeElement.style.display = 'block';
      this.card2.nativeElement.style.display = 'block';
      this.card3.nativeElement.style.display = 'block';
      this.dot1.nativeElement.style.backgroundColor = 'white';
      this.dot2.nativeElement.style.backgroundColor = 'gray';
      this.dot3.nativeElement.style.backgroundColor = 'gray';
    }
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    this.onResize();
  }

  startAnimation(state, num) {
    if (window.innerWidth <= 480){
      switch (num) {
        case 1:
          if (!this.animationState1 && state === 'fadeOutLeft') {
            this.animationState1 = state;
            this.card1.nativeElement.style.display = 'none';
            this.card2.nativeElement.style.display = 'block';
            this.animationState2 = 'fadeInRight';
            this.dot1.nativeElement.style.backgroundColor = 'gray';
            this.dot2.nativeElement.style.backgroundColor = 'white';
          }
          break;
        case 2:
          if (!this.animationState2 && state === 'fadeOutLeft') {
            this.animationState2 = state;
            this.card2.nativeElement.style.display = 'none';
            this.card3.nativeElement.style.display = 'block';
            this.animationState3 = 'fadeInRight';
            this.dot2.nativeElement.style.backgroundColor = 'gray';
            this.dot3.nativeElement.style.backgroundColor = 'white';
          } else if (!this.animationState2 && state === 'fadeOutRight') {
            this.animationState2 = state;
            this.card2.nativeElement.style.display = 'none';
            this.card1.nativeElement.style.display = 'block';
            this.animationState1 = 'fadeInLeft';
            this.dot2.nativeElement.style.backgroundColor = 'gray';
            this.dot1.nativeElement.style.backgroundColor = 'white';
          }
          break;
        case 3:
          if (!this.animationState3 && state === 'fadeOutRight') {
            this.animationState3 = state;
            this.card3.nativeElement.style.display = 'none';
            this.card2.nativeElement.style.display = 'block';
            this.animationState2 = 'fadeInLeft';
            this.dot3.nativeElement.style.backgroundColor = 'gray';
            this.dot2.nativeElement.style.backgroundColor = 'white';
          }
          break;
      }
    }
  }

  resetAnimationState() {
    this.animationState1 = '';
    this.animationState2 = '';
    this.animationState3 = '';
  }

}
