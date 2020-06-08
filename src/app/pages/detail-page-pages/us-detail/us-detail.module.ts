import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsDetailRoutingModule } from './us-detail-routing.module';
import { UsDetailComponent } from './us-detail.component';


@NgModule({
    imports: [
        CommonModule,
        UsDetailRoutingModule,
        NgbModule,
    ],
    declarations: [
        UsDetailComponent
    ],
})
export class UsDetailModule { }
