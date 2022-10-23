import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {
    path: 'mortgage',
    loadChildren: () => import('./mortgage-calculator/mortgage-calculator.module').then(m => m.MortgageCalculatorModule)
  },
  { path: '', redirectTo: 'mortgage', pathMatch: 'full' },
  { path: '**', redirectTo: 'mortgage', pathMatch: 'full' },
]

