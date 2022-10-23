import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentPlanComponent } from './mortgage-calculator/payment-plan/payment-plan.component';
import { PrePaymentPlanComponent } from './mortgage-calculator/pre-payment-plan/pre-payment-plan.component';
import { CalculationSummaryComponent } from './mortgage-calculator/calculation-summary/calculation-summary.component';
import { MortgageSummaryComponent } from './mortgage-calculator/mortgage-summary/mortgage-summary.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator/mortgage-calculator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { DecimalDirective } from './directive/decimal.directive';
import { NgChartsModule } from "ng2-charts";
import { PaymentHistoryComponent } from './mortgage-calculator/payment-history/payment-history.component';
import { InterestPaymentComponent } from './mortgage-calculator/interest-payment/interest-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPlanComponent,
    PrePaymentPlanComponent,
    CalculationSummaryComponent,
    MortgageSummaryComponent,
    MortgageCalculatorComponent,
    DecimalDirective,
    PaymentHistoryComponent,
    InterestPaymentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
