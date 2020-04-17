import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamRoutingModule } from './our-team-routing.module';
import { OurTeamComponent } from './our-team.component';



@NgModule({
    imports: [
        CommonModule,
        OurTeamRoutingModule
    ],
    declarations: [
        OurTeamComponent
    ]
})
export class OurTeamModule { }