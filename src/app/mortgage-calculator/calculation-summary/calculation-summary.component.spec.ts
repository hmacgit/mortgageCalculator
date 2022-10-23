import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSummaryComponent } from './calculation-summary.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('CalculationSummaryComponent', () => {
  let component: CalculationSummaryComponent;
  let fixture: ComponentFixture<CalculationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ CalculationSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
