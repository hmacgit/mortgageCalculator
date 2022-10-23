import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageSummaryComponent } from './mortgage-summary.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('MortgageSummaryComponent', () => {
  let component: MortgageSummaryComponent;
  let fixture: ComponentFixture<MortgageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ MortgageSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
