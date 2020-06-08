import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { SINGLE_ROUTES } from './shared/routes/single-page.routes';
import {DetailPageComponent} from './layouts/detail-page/detail-page.component';
import {DETAIL_ROUTES} from './shared/routes/detail-page.routes';
import { ContactPageComponent } from './layouts/contact-page/contact-page.component';
import { CONTACT_ROUTES } from './shared/routes/contact-page.routes';

const routes: Routes = [
  {
    path: '', component: SinglePageComponent, data: { title: 'single page views'}, children: SINGLE_ROUTES
  },
  {
    path: '', component: DetailPageComponent, data: {title: 'detail page views'}, children: DETAIL_ROUTES
  },
  {
    path: '', component: ContactPageComponent, data: {title: 'contact page views'}, children: CONTACT_ROUTES
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0,64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
