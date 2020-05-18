import {
    Component,
    OnInit,
    ElementRef,
    HostListener,
    ViewChildren,
    ViewChild,
    OnDestroy,
    AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked
} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {delay} from 'rxjs/operators';

@Component({
    selector: 'app-service-detail',
    templateUrl: './service-detail.component.html',
    styleUrls: ['./service-detail.component.css'],
})

export class ServiceDetailComponent implements OnInit, AfterContentInit {

    constructor(private route: ActivatedRoute, private router: Router) {
    }
    @ViewChildren('wheel') wheel: [ElementRef];
    @ViewChild('mobile') mobile: ElementRef;
    @ViewChild('web') web: ElementRef;
    @ViewChild('ui') ui: ElementRef;
    @ViewChild('support') support: ElementRef;
    @ViewChild('community') community: ElementRef;
    @ViewChild('marketing') marketing: ElementRef;
    scrollTo: any;
    doScroll;
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
        this.wheel.forEach((element => {
            element.nativeElement.style.transform = 'rotate(' + window.pageYOffset / 8 + 'deg)';
        }));
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        setTimeout(() => {
            const el = this.route.snapshot.queryParamMap.get('scroll');
            switch (el) {
                case 'mobile':
                    this.mobile.nativeElement.scrollIntoView({block: 'center'});
                    break;
                case 'web':
                    this.web.nativeElement.scrollIntoView({block: 'center'});
                    break;
                case 'ui':
                    this.ui.nativeElement.scrollIntoView({block: 'center'});
                    break;
                case 'support':
                    this.support.nativeElement.scrollIntoView({block: 'center'});
                    break;
                case 'community':
                    this.community.nativeElement.scrollIntoView({block: 'center'});
                    break;
                case 'marketing':
                    this.marketing.nativeElement.scrollIntoView({block: 'center'});
                    break;
            }
        }, 700);
    }




}
