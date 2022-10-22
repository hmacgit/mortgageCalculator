export class MortgageCalculatorConstants {
    static monthsInYears = 12;

    static control = {
      MORTGAGE_AMOUNT: 'mortgageAmount',
      INTEREST_RATE: 'interestRate',
      AMORTIZATION_PERIOD_YEARS:  'amortizationPeriodYears',
      AMORTIZATION_PERIOD_MONTHS:  'amortizationPeriodMonths',
      PAYMENT_FREQUENCY:  'paymentFrequency',
      TERM: 'term',
      PRE_PAYMENT_AMOUNT: 'prepaymentAmount',
      PRE_PAYMENT_FREQUENCY: 'prepaymentFrequency',
      START_WITH_PAYMENT: 'startWithPayment',
    }

    static paymentFrequency = [
      {id: 1, value: 'weekly'},
      {id: 2, value: 'bi-weekly'},
      {id: 3, value: 'semi-monthly'},
      {id: 4, value: 'monthly'},
    ]

    static prepaymentAmount = [
      {id: 1, value: 'One Time'},
      {id: 2, value: 'Each Year'},
      {id: 3, value: 'Same as Regular Payment'}
    ]


}


