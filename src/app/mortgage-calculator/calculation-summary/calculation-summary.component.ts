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
    {

      console.log(data);
      return this.tableValues = data;

    }
    );
    /*
    this.tableValues = [
      {
        category: 'Number of Payments',
        term: 60,
        AmoritizationPeriod: 300,
      },
      {
        category: 'Number of Payments',
        term: 60,
        AmoritizationPeriod: 300,
      }
    ]
*/
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
