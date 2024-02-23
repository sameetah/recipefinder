import { TestBed } from '@angular/core/testing';

import { WeeklyRecipePlanService } from '../services/weekly-recipe-plan.service';

describe('WeeklyRecipePlanService', () => {
  let service: WeeklyRecipePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyRecipePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
