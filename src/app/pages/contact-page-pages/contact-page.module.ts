import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactBusinessComponent } from './contact-business/contact-business.component';
import { ContactMoreInfoComponent } from './contact-more-info/contact-more-info.component';
import { ContactPlansComponent } from './contact-plans/contact-plans.component';
import { MobileWebComponent } from './mobile-web/mobile-web.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        ContactPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SweetAlert2Module.forRoot()
    ],
    declarations: [
        ContactBusinessComponent,
        ContactMoreInfoComponent,
        ContactPlansComponent,
        MobileWebComponent,
    ],
})
export class ContactPageModule { }
