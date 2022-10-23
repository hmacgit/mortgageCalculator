import { DecimalDirective } from './decimal.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "../app.component";
import {PaymentPlanComponent} from "../mortgage-calculator/payment-plan/payment-plan.component";

describe('DecimalDirective', () => {
  let directive: DecimalDirective;
  let fixture;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AppComponent, DecimalDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .createComponent(AppComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
