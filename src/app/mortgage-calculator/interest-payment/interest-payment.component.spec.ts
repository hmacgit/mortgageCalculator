import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPaymentComponent } from './interest-payment.component';

describe('InterestPaymentComponent', () => {
  let component: InterestPaymentComponent;
  let fixture: ComponentFixture<InterestPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
