import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MortgageCalculatorDataService} from "../mortgage-calculator-data.service";

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.css']
})
export class CalculationSummaryComponent implements OnInit, OnDestroy {

  tableValues: Array<any>;
  subscription: Subscription;

  constructor(
    private mortgageCalculatorDataService: MortgageCalculatorDataService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.mortgageCalculatorDataService.getPaymentPlan().subscribe((data) =>
      this.tableValues = data
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
