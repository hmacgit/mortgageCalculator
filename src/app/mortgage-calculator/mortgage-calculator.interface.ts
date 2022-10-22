export interface IMortgageCalculator {
  mortgageAmount: number;
  interestRate: number;
  amortizationPeriodYears: number;
  amortizationPeriodMonths: number;
  paymentFrequency: string;
  term: number;
  prepaymentAmount: number;
  prepaymentFrequency: string;
  startWithPayment: number
}

export interface ICalculationSummaryTable {
  category: string,
  term: number,
  amortizationPeriod: number
}

