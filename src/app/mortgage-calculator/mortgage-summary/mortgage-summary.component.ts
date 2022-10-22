import { Component, OnInit } from '@angular/core';
import {MortgageCalculatorFormService} from "../mortgage-calculator-form.service";
import {MortgageCalculatorDataService} from "../mortgage-calculator-data.service";

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.css']
})
export class MortgageSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
