import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDivisionCalculatorComponent } from './assets.division.calculator.component';

describe('AssetsDivisionCalculatorComponent', () => {
  let component: AssetsDivisionCalculatorComponent;
  let fixture: ComponentFixture<AssetsDivisionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDivisionCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsDivisionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
