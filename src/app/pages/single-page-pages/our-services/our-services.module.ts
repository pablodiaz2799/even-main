import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './our-services.component';




@NgModule({
    imports: [
        CommonModule,
        OurServicesRoutingModule
    ],
    declarations: [
        OurServicesComponent
    ]
})
export class OurServicesModule { }