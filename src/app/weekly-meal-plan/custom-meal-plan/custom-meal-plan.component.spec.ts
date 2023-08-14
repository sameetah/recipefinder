import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMealPlanComponent } from './custom-meal-plan.component';

describe('CustomMealPlanComponent', () => {
  let component: CustomMealPlanComponent;
  let fixture: ComponentFixture<CustomMealPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMealPlanComponent]
    });
    fixture = TestBed.createComponent(CustomMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
