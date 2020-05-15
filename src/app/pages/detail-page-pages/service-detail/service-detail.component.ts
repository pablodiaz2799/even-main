import {Component, OnInit, ElementRef, HostListener, ViewChildren} from '@angular/core';

@Component({
    selector: 'app-service-detail',
    templateUrl: './service-detail.component.html',
    styleUrls: ['./service-detail.component.css'],
})

export class ServiceDetailComponent implements OnInit {
    @ViewChildren('wheel') wheel: [ElementRef];

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
        this.wheel.forEach((element => {
            element.nativeElement.style.transform = 'rotate(' + window.pageYOffset / 8 + 'deg)';
        }));
    }
    constructor() {
    }

    ngOnInit(): void {
    }

}
