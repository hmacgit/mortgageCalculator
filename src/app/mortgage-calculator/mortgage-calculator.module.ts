import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentPlanComponent} from "./payment-plan/payment-plan.component";
import {PrePaymentPlanComponent} from "./pre-payment-plan/pre-payment-plan.component";
import {CalculationSummaryComponent} from "./calculation-summary/calculation-summary.component";
import {MortgageSummaryComponent} from "./mortgage-summary/mortgage-summary.component";
import {MortgageCalculatorComponent} from "./mortgage-calculator/mortgage-calculator.component";
import {DecimalDirective} from "../directive/decimal.directive";
import {PaymentHistoryComponent} from "./payment-history/payment-history.component";
import {InterestPaymentComponent} from "./interest-payment/interest-payment.component";
import {MatTableModule} from "@angular/material/table";
import {NgChartsModule} from "ng2-charts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MortgageRouting} from "./mortgage.routing";

@NgModule({
  declarations: [
    PaymentPlanComponent,
    PrePaymentPlanComponent,
    CalculationSummaryComponent,
    MortgageSummaryComponent,
    MortgageCalculatorComponent,
    DecimalDirective,
    PaymentHistoryComponent,
    InterestPaymentComponent,
  ],
  imports: [
    CommonModule,
    MortgageRouting,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    NgChartsModule
  ]
})
export class MortgageCalculatorModule { }
