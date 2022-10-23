import { DecimalDirective } from './decimal.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {PaymentPlanComponent} from "../mortgage-calculator/payment-plan/payment-plan.component";
import {By} from "@angular/platform-browser";

describe('DecimalDirective', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;
  let inputEl: DebugElement;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        DecimalDirective
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ PaymentPlanComponent, DecimalDirective ],
    }).createComponent(PaymentPlanComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      mortgageAmount: [null],
      interestRate: [null],
      amortizationPeriodYears: [null],
      amortizationPeriodMonths: [null],
      paymentFrequency: [null],
      term: [null],
      prepaymentAmount: [null],
      prepaymentFrequency: [null],
      startWithPayment: [null],
    });
    inputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('on blur input', () => {
    const inp = inputEl.nativeElement;
    inp.value = 123;
    inp.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(inp.value).toEqual('123.00');
  });

});
