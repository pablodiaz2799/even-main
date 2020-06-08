import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidebarMenu') menu: ElementRef;
  @ViewChild('menuIcon') icon: ElementRef;
  @Output() someEvent = new EventEmitter();

constructor(private router: Router) { }

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
  if (val === 'detalle') {
    this.router.navigateByUrl('/detalle');
  } else if (val === 'planes') {
    this.router.navigateByUrl('/planes');
  } else if (val === 'nosotros') {
    this.router.navigateByUrl('/nosotros');
  }
  console.log('clicked');
  this.hideMenu();
  this.someEvent.emit(val);
}


}
