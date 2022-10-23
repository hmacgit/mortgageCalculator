import { Injectable } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { IMortgageCalculator } from "./mortgage-calculator.interface";

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorFormService {

  constructor(
    private fb: FormBuilder,
  ) { }

  createForm(mortgageCalculator :IMortgageCalculator = <IMortgageCalculator> {}) {
    return this.fb.group({
      mortgageAmount: [mortgageCalculator.mortgageAmount],
      interestRate: [mortgageCalculator.interestRate],
      amortizationPeriodYears: [mortgageCalculator.amortizationPeriodYears],
      amortizationPeriodMonths: [mortgageCalculator.amortizationPeriodMonths],
      paymentFrequency: [mortgageCalculator.paymentFrequency],
      term: [mortgageCalculator.term],
      prepaymentAmount: [mortgageCalculator.prepaymentAmount],
      prepaymentFrequency: [mortgageCalculator.prepaymentFrequency],
      startWithPayment: [mortgageCalculator.startWithPayment]
    })
  }

}
