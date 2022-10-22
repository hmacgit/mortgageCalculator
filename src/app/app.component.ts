import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MortgageCalculatorFormService} from "./mortgage-calculator/mortgage-calculator-form.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mortgageCalculator';

  ngOnInit(): void {
  }


}
