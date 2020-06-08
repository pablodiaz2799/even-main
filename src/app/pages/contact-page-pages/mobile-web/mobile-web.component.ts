import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-web',
  templateUrl: './mobile-web.component.html',
  styleUrls: ['./mobile-web.component.css']
})
export class MobileWebComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  go(platform) {
    this.router.navigateByUrl('/contacto/planes', {state: {plat: platform}});
  }

}
