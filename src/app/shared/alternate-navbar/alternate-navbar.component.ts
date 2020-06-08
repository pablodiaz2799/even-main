import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alternate-navbar',
  templateUrl: './alternate-navbar.component.html',
  styleUrls: ['./alternate-navbar.component.css']
})
export class AlternateNavbarComponent implements OnInit {
  @ViewChild('sidebarMenu') menu: ElementRef;
  @ViewChild('menuIcon') icon: ElementRef;
  @Output() someEvent = new EventEmitter();

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  swiperight(event) {
    if (event.direction == 8 || event.direction == 4) {
      this.hideMenu();
    }
  }

  showMenu() {
    this.menu.nativeElement.style.height = '100vh';
    document.body.style.position = 'fixed';
  }

  hideMenu() {
    this.menu.nativeElement.style.height = '0vh';
    document.body.style.position = 'static';
  }

  itemClicked(val) {
    this.router.navigateByUrl(val);
    console.log('clicked');
    this.hideMenu();
    this.someEvent.emit(val);
  }

  goBack() {
    this.location.back();
  }
}
