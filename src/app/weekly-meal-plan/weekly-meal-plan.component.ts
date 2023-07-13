import { Component } from '@angular/core';

import { IPlan } from './plans';
import { Router } from '@angular/router';

import { WeeklyRecipePlanService } from '../weekly-card/weekly-recipe-plan.service';

@Component({
  selector: 'app-weekly-meal-plan',
  templateUrl: './weekly-meal-plan.component.html',
  styleUrls: ['./weekly-meal-plan.component.scss'],
})
export class WeeklyMealPlanComponent {
  constructor(private recipeService: WeeklyRecipePlanService) {}
  cardsArray: IPlan[] = [
    {
      planId: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      planName: 'Ketogenic',
      description: 'Keto is a very healthy diet',
    },
    {
      planId: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      planName: 'Vegetarian',
      description: 'have a cheap meal and stay healthy',
    },
    {
      planId: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      planName: 'Lacto-Vegetarian',
      description: 'have a cheap meal and stay healthy',
    },
    {
      planId: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      planName: 'Vegan',
      description: 'have a cheap meal and stay healthy',
    },
  ];
}
