import { TestBed } from '@angular/core/testing';

import { MortgageCalculatorFormService } from './mortgage-calculator-form.service';

describe('MortageCalculatorFormService', () => {
  let service: MortgageCalculatorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculatorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
