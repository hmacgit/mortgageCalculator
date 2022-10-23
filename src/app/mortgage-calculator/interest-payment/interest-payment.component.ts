import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-payment',
  templateUrl: './interest-payment.component.html',
  styleUrls: ['./interest-payment.component.css']
})
export class InterestPaymentComponent implements OnInit {

  /*
  * https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/
  * mock data place holder to enter actual data later.
  * */

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
