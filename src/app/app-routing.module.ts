import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { SINGLE_ROUTES } from './shared/routes/single-page.routes';
import {DetailPageComponent} from './layouts/detail-page/detail-page.component';
import {DETAIL_ROUTES} from './shared/routes/detail-page.routes';


const routes: Routes = [
  {
    path: '', component: SinglePageComponent, data: { title: 'single page views'}, children: SINGLE_ROUTES
  },
  {
    path: '', component: DetailPageComponent, data: {title: 'detail page views'}, children: DETAIL_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
