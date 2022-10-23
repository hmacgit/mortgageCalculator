import { TestBed } from '@angular/core/testing';

import { MortgageCalculatorFormService } from './mortgage-calculator-form.service';
import { ReactiveFormsModule } from "@angular/forms";
import { MortgageCalculatorComponent } from "./mortgage-calculator/mortgage-calculator.component";

describe('MortageCalculatorFormService', () => {
  let service: MortgageCalculatorFormService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ MortgageCalculatorComponent ],
      providers: [
        MortgageCalculatorFormService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculatorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
