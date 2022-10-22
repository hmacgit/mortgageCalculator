import { TestBed } from '@angular/core/testing';

import { MortgageCalculatorDataService } from './mortgage-calculator-data.service';

describe('MortageCalculatorDataService', () => {
  let service: MortgageCalculatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
