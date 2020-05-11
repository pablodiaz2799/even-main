import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
    HammerGestureConfig,
    HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
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
    imports: [
        CommonModule,
        PlansRoutingModule,
        BrowserAnimationsModule,
        HammerModule,
        NgbModule,
    ],
    declarations: [
        PlansComponent
    ],
    exports: [
        CommonModule,
        PlansComponent,
    ],
    providers: [
        {
            // hammer instantion with custom config
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig,
        },
    ],
})
export class PlansModule { }
