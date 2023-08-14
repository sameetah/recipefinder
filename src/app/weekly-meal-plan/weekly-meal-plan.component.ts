import { Component } from '@angular/core';

import { IPlan } from './plans';
import { Router } from '@angular/router';

import { WeeklyRecipePlanService } from '../weekly-card/weekly-recipe-plan.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-weekly-meal-plan',
  templateUrl: './weekly-meal-plan.component.html',
  styleUrls: ['./weekly-meal-plan.component.scss'],
  animations: [
    trigger('cardHover', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
          boxShadow: '0px 0px 12px 5px rgba(96, 108, 56, 0.55)',
          color: '#606c38',
        })
      ),
      state(
        'hover',
        style({
          transform: 'scale(1.05)',
          boxShadow: '0px 0px 20px 10px rgba(96, 108, 56, 0.7)',
          color: '#FFFFFF',
        })
      ),
      transition('normal => hover', animate('200ms ease-in')),
      transition('hover => normal', animate('200ms ease-out')),
    ]),
  ],
})
export class WeeklyMealPlanComponent {
  constructor(
    private recipeService: WeeklyRecipePlanService,
    private router: Router
  ) {}

  cardState: string = 'normal';

  onCardHover() {
    this.cardState = 'hover';
  }

  onCardLeave() {
    this.cardState = 'normal';
  }

  cardsArray: IPlan[] = [
    {
      planId: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      planName: 'Ketogenic',
      description:
        'Here are the basics of keto: The diet aims to force your body into using a different type of fuel. Instead of relying on sugar (glucose) that comes from carbohydrates such as grains, legumes, vegetables, fruits.',
    },
    {
      planId: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      planName: 'Vegetarian',
      description:
        ' To get the most out of a vegetarian diet, choose a variety of healthy plant-based foods. These include whole fruits and vegetables and whole grains. Nuts and legumes, such as lentils, beans and peanuts are considered healthy plant-based foods.',
    },
    {
      planId: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1514843319620-4f042827c481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      planName: 'Lacto-Vegetarian',
      description:
        'A lacto-vegetarian (sometimes referred to as a lactarian; from the Latin root lact-, milk) diet is a diet that abstains from the consumption of meat as well as eggs, while still consuming dairy products such as milk, cheese, yogurt, butter, ghee, cream, and kefir.',
    },
    {
      planId: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1444&q=80',
      planName: 'Vegan',
      description:
        'Vegan diets are made up of only plant-based foods. This type of diet includes fruits, vegetables, soy, legumes, nuts and nut butters, plant-based dairy alternatives, sprouted or fermented plant foods and whole grains. Vegan diets dont include animal food.',
    },
  ];

  goToCustomMealPlan() {
    // Navigate to the CustomMealComponent template
    this.router.navigateByUrl('/make-custom-meal-plan');
  }
}
