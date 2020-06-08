import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { webData, mobileData } from 'src/app/shared/data/contact-plans.data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-business',
  templateUrl: './contact-business.component.html',
  styleUrls: ['./contact-business.component.css']
})
export class ContactBusinessComponent implements OnInit {
  private state$: Observable<object>;
  platform: string;
  plan: string;
  form = new FormGroup({
    about: new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
    cart: new FormControl(''),
    categories: new FormControl(''),
    community: new FormControl(''),
    logo: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
    this.state$.forEach(element => {
      this.platform = element['plat'];
      this.plan = element['type'];
    });
    console.log(this.plan);
    console.log(this.platform);
  }

  get cart() {
    return this.form.get('cart');
  }

  get categories() {
    return this.form.get('categories');
  }

  get community() {
    return this.form.get('community');
  }

  get logo() {
    return this.form.get('logo');
  }

  get about(){
    return this.form.get('about');
  }

  submit(){
    const cart = this.cart.value;
    const categories = this.categories.value;
    const community = this.community.value;
    const logo = this.logo.value;
    const about = this.about.value;
    const platform = this.platform;
    const plan = this.plan;
    this.router.navigateByUrl('/contacto/info', {state: {cart, categories, community, logo, about, plan, platform}});
  }

}
