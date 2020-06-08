import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { element } from 'protractor';
import { webData, mobileData } from 'src/app/shared/data/contact-plans.data';

@Component({
  selector: 'app-contact-plans',
  templateUrl: './contact-plans.component.html',
  styleUrls: ['./contact-plans.component.css']
})
export class ContactPlansComponent implements OnInit {
  pageText = {};
  platform: string;
  private state$: Observable<object>;

  constructor(public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
    this.state$.forEach(element => {
      this.platform = element['plat'];
    });
    if (this.platform === 'web') {
      this.pageText = webData;
    } else if (this.platform === 'mobile') {
      this.pageText = mobileData;
    } else {
      this.pageText = webData;
    }
  }

  go(type){
    const plan = type;
    this.router.navigateByUrl('/contacto/proyecto', {state:{plat: this.platform, type: plan}});
  }

}
