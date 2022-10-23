import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ MortgageCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
