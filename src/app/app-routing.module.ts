import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { SINGLE_ROUTES } from './shared/routes/single-page.routes';


const routes: Routes = [
  {
    path: '', component: SinglePageComponent, data:{ title: 'single page views'}, children: SINGLE_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
