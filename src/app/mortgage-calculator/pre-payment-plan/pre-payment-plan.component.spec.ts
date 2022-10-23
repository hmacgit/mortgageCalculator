import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrePaymentPlanComponent } from './pre-payment-plan.component';
import {
  ControlContainer,
  FormBuilder,
  ReactiveFormsModule
} from "@angular/forms";
import {MortgageCalculatorComponent} from "../mortgage-calculator/mortgage-calculator.component";
import {MortgageCalculatorConstants} from "../mortgage-calculator.constants";

describe('PrePaymentPlanComponent', () => {
  let component: PrePaymentPlanComponent;
  let fixture: ComponentFixture<PrePaymentPlanComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ MortgageCalculatorComponent, PrePaymentPlanComponent ],
      providers: [
        { provide: ControlContainer, useValue: formBuilder }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePaymentPlanComponent);
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

  it('should constantControl be defined', () => {
    expect(component.constantControl).toEqual(MortgageCalculatorConstants.control)
  });

  it('should constantControl be defined', () => {
    expect(component.prepaymentAmount).toEqual(MortgageCalculatorConstants.prepaymentAmount)
  });


});
