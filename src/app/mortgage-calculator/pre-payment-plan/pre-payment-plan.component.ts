import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MortgageCalculatorConstants} from "../mortgage-calculator.constants";

@Component({
  selector: 'app-pre-payment-plan',
  templateUrl: './pre-payment-plan.component.html',
  styleUrls: ['../mortgage-calculator/mortgage-calculator.component.css', './pre-payment-plan.component.css']
})
export class PrePaymentPlanComponent implements OnInit {

  @Input() form: FormGroup;
  constantControl = MortgageCalculatorConstants.control;
  prepaymentAmount = MortgageCalculatorConstants.prepaymentAmount;

  constructor() { }

  ngOnInit(): void {
  }

}
