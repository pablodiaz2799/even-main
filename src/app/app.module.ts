import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { PlansModule } from './pages/single-page-pages/plans/plans.module';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlansModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
