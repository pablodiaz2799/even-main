import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileWebComponent } from './mobile-web.component';

describe('MobileWebComponent', () => {
  let component: MobileWebComponent;
  let fixture: ComponentFixture<MobileWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
