import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMealPlanComponent } from './weekly-meal-plan.component';

describe('WeeklyMealPlanComponent', () => {
  let component: WeeklyMealPlanComponent;
  let fixture: ComponentFixture<WeeklyMealPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyMealPlanComponent]
    });
    fixture = TestBed.createComponent(WeeklyMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
