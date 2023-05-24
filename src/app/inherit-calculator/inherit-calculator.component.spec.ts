import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritCalculatorComponent } from './inherit-calculator.component';

describe('InheritCalculatorComponent', () => {
  let component: InheritCalculatorComponent;
  let fixture: ComponentFixture<InheritCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
