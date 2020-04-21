import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { PlansModule } from './pages/single-page-pages/plans/plans.module';
import { ChooseUsComponent } from './pages/single-page-pages/choose-us/choose-us.component';
import { ContactComponent } from './pages/single-page-pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    ChooseUsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
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
