import { PlansDetailRoutingModule } from './plans-detail-routing.module';
import { NgModule } from '@angular/core';
import { PlansDetailComponent } from './plans-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        PlansDetailRoutingModule,
    ],
    declarations: [
        PlansDetailComponent
    ],
})
export class PlansDetailModule {}
