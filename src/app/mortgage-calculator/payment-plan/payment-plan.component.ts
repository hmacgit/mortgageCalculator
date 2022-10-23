import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MortgageCalculatorConstants} from "../mortgage-calculator.constants";

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['../mortgage-calculator/mortgage-calculator.component.css', './payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {

  @Input() form: FormGroup;
  constantControl = MortgageCalculatorConstants.control;
  amortizationYears: Array<number> = [];
  amortizationMonths: Array<number> = [];
  termsYears: Array<number> = [];
  paymentFrequency = MortgageCalculatorConstants.paymentFrequency;

  constructor() {
  }

  ngOnInit(): void {
    for(let x = 1; x <= 30; x++) {
      this.amortizationYears?.push(x);
    }
    for(let i = 1; i < 12; i++) {
      this.amortizationMonths?.push(i);
    }
    for(let i = 1; i < 11; i++) {
      this.termsYears?.push(i);
    }
  }

}
