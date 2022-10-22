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

@NgModule({
  declarations: [
    AppComponent,
    PaymentPlanComponent,
    PrePaymentPlanComponent,
    CalculationSummaryComponent,
    MortgageSummaryComponent,
    MortgageCalculatorComponent,
    DecimalDirective
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
