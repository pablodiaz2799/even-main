import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';




@NgModule({
    imports: [
        CommonModule,
        PlansRoutingModule
    ],
    declarations: [
        PlansComponent
    ],
    exports:[
        CommonModule,
        PlansComponent,
    ]
})
export class PlansModule { }