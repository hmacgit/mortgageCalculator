import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHistoryComponent } from './payment-history.component';
import { ReactiveFormsModule } from "@angular/forms";

describe('PaymentHistoryComponent', () => {
  let component: PaymentHistoryComponent;
  let fixture: ComponentFixture<PaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ PaymentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
