import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCardComponent } from './weekly-card.component';

describe('WeeklyCardComponent', () => {
  let component: WeeklyCardComponent;
  let fixture: ComponentFixture<WeeklyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyCardComponent]
    });
    fixture = TestBed.createComponent(WeeklyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
