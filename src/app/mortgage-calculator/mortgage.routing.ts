import {RouterModule} from "@angular/router";
import {MortgageCalculatorComponent} from "./mortgage-calculator/mortgage-calculator.component";

export const MortgageRouting = RouterModule.forChild( [
  { path: '', component: MortgageCalculatorComponent, pathMatch: 'full' },
])
