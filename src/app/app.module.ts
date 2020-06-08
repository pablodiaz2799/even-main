import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { ChooseUsComponent } from './pages/single-page-pages/choose-us/choose-us.component';
import { ContactComponent } from './pages/single-page-pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OurServicesComponent } from './pages/single-page-pages/our-services/our-services.component';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';
import { AlternateNavbarComponent } from './shared/alternate-navbar/alternate-navbar.component';
import { PlansComponent } from './pages/single-page-pages/plans/plans.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ContactPageComponent } from './layouts/contact-page/contact-page.component';

export class HammerConfig extends HammerGestureConfig {
    overrides = {
      pan: {
          direction: 6
      },
      pinch: {
          enable: false
      },
      rotate: {
          enable: false
      }
  };
  }

@NgModule({
    declarations: [
        AppComponent,
        SinglePageComponent,
        ChooseUsComponent,
        ContactComponent,
        PlansComponent,
        FooterComponent,
        NavbarComponent,
        OurServicesComponent,
        DetailPageComponent,
        AlternateNavbarComponent,
        ContactPageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        HammerModule,
        NgbModule,
        SweetAlert2Module.forRoot()
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig
        }
    ],
    exports: [
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
