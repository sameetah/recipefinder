import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndDrinkComponent } from './food-and-drink.component';

describe('FoodAndDrinkComponent', () => {
  let component: FoodAndDrinkComponent;
  let fixture: ComponentFixture<FoodAndDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodAndDrinkComponent]
    });
    fixture = TestBed.createComponent(FoodAndDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
