import {Component, OnInit} from '@angular/core';
import {MortgageCalculatorFormService} from "../mortgage-calculator-form.service";
import {FormGroup} from "@angular/forms";
import {MortgageCalculatorConstants} from "../mortgage-calculator.constants";
import {ICalculationSummaryTable} from "../mortgage-calculator.interface";
import {MortgageCalculatorDataService} from "../mortgage-calculator-data.service";

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  form: FormGroup;

  constructor(
    private mortgageCalculatorFormService: MortgageCalculatorFormService,
    private mortgageCalculatorDataService: MortgageCalculatorDataService
  ) {
    this.form = this.mortgageCalculatorFormService.createForm();
  }

  ngOnInit(): void {
    this.setInitialValue();
  }

  setInitialValue() {
    this.form.controls[MortgageCalculatorConstants.control.MORTGAGE_AMOUNT].setValue(100000);
    this.form.controls[MortgageCalculatorConstants.control.INTEREST_RATE].setValue(5);
    this.form.controls[MortgageCalculatorConstants.control.AMORTIZATION_PERIOD_YEARS].setValue(25);
    this.form.controls[MortgageCalculatorConstants.control.TERM].setValue(5);
    this.form.controls[MortgageCalculatorConstants.control.PRE_PAYMENT_AMOUNT].setValue(0);
  }

  submit() {
    this.calculate();
  }

  calculate() {
    const paymentPlan: Array<ICalculationSummaryTable> = [];
    const term = this.form.value?.term * MortgageCalculatorConstants.monthsInYears ?
      this.form.value?.term * MortgageCalculatorConstants.monthsInYears : 0;
    const amortizationPeriod = (this.form.value?.amortizationPeriodYears + this.form.value?.amortizationPeriodMonths)
      * MortgageCalculatorConstants.monthsInYears ?
      (this.form.value?.amortizationPeriodYears + this.form.value?.amortizationPeriodMonths)
      * MortgageCalculatorConstants.monthsInYears : 0;
    const monthlyPayment = (this.form.value?.mortgageAmount *
      this.form.value?.interestRate/100 /
      MortgageCalculatorConstants.monthsInYears);



    paymentPlan.push({
      category: 'Number of Payments',
      term: term,
      amortizationPeriod: amortizationPeriod
    });


    paymentPlan.push({
      category: 'Mortgage Payment',
      term: this.form.value?.mortgageAmount ? this.form.value?.mortgageAmount : 0,
      amortizationPeriod: this.form.value?.mortgageAmount ? this.form.value?.mortgageAmount : 0
    });
    paymentPlan.push({
      category: 'Prepayment',
      term: monthlyPayment,
      amortizationPeriod: monthlyPayment
    });
    paymentPlan.push({
      category: 'Principal Payments',
      term: this.form.value?.mortgageAmount ? this.form.value?.mortgageAmount : 0,
      amortizationPeriod: this.form.value?.mortgageAmount ? this.form.value?.mortgageAmount : 0
    });
    paymentPlan.push({
      category: 'Interest Payment',
      term: this.form.value?.mortgageAmount * term,
      amortizationPeriod: this.form.value?.mortgageAmount * amortizationPeriod
    });

    paymentPlan.push({
      category: 'Total Cost',
      term: this.form.value?.mortgageAmount ? this.form.value?.mortgageAmount : 0,
      amortizationPeriod: this.form.value?.mortgageAmount ? this.form.value?.mortgageAmount : 0
    });

   /*
    console.log((this.form.value?.amortizationPeriodYears + this.form.value?.amortizationPeriodMonths)
      * MortgageCalculatorConstants.monthsInYears);
   */
    this.mortgageCalculatorDataService.sendPaymentPlan(paymentPlan);

  }

}
