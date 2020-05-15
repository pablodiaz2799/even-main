import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServiceDetailRoutingModule} from './service-detail-routing.module';
import {ServiceDetailComponent} from './service-detail.component';

@NgModule({
    imports: [
        CommonModule,
        ServiceDetailRoutingModule,
        NgbModule,
    ],
    declarations: [
        ServiceDetailComponent
    ],
})
export class ServiceDetailModule { }
