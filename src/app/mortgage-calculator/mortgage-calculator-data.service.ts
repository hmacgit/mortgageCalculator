import { Injectable } from '@angular/core';
import {ICalculationSummaryTable} from "./mortgage-calculator.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorDataService {

  private subject = new Subject<any>()
  paymentPlan: Array<ICalculationSummaryTable> = [];

  constructor() { }


  addPaymentPlan(paymentPlan: any) {
    this.paymentPlan.push(paymentPlan);
  }

  sendPaymentPlan(paymentPlan: Array<ICalculationSummaryTable>) {
    this.subject.next(paymentPlan);
  }

  getPaymentPlan() {
    return this.subject.asObservable();
  }


}
