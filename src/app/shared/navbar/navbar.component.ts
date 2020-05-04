import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidebarMenu') menu: ElementRef;
  @ViewChild('menuIcon') icon: ElementRef;
  @Output() someEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.menu.nativeElement.style.width = '100%';
  }

  hideMenu(){
    this.menu.nativeElement.style.width = '0px';
  }

  itemClicked(val){
    console.log('clicked');
    this.hideMenu();
    this.someEvent.emit(val);
  }

}
