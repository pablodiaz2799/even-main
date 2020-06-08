import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateFooterComponent } from './alternate-footer.component';

describe('AlternateFooterComponent', () => {
  let component: AlternateFooterComponent;
  let fixture: ComponentFixture<AlternateFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
