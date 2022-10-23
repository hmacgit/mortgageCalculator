import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentPlanComponent } from './payment-plan.component';
import {
  ControlContainer,
  FormBuilder,
  ReactiveFormsModule
} from "@angular/forms";
import {MortgageCalculatorComponent} from "../mortgage-calculator/mortgage-calculator.component";

describe('PaymentPlanComponent', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ MortgageCalculatorComponent, PaymentPlanComponent ],
      providers: [
        { provide: ControlContainer, useValue: formBuilder }
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlanComponent);
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be defined', () => {
    expect(component.form).toBeDefined();
  });

  it('amortizationYears', () => {
    expect(component.amortizationYears.length).toEqual(30);
  });

  it('amortizationMonths', () => {
    expect(component.amortizationMonths.length).toEqual(11);
  });

  it('termsYears', () => {
    expect(component.termsYears.length).toEqual(10);
  });

});
