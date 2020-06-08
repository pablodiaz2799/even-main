import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPlansComponent } from './contact-plans.component';

describe('ContactPlansComponent', () => {
  let component: ContactPlansComponent;
  let fixture: ComponentFixture<ContactPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
