import { TestBed } from '@angular/core/testing';

import { MortageCalculatorService } from './mortage-calculator.service';

describe('MortageCalculatorService', () => {
  let service: MortageCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortageCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
