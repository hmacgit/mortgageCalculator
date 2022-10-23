import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  /*
  * https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/
  * mock data place holder to enter actual data later.
  * */

  constructor() { }

  ngOnInit(): void {
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

}
