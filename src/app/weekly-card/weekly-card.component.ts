import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlan } from '../weekly-meal-plan/plans';
import { WeeklyRecipePlanService } from './weekly-recipe-plan.service';
import { HttpClient } from '@angular/common/http';
import {
  RecipeModel,
  SubRecipeResult,
} from '../weekly-meal-plan/weekly-recipe.model';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-weekly-card',
  templateUrl: './weekly-card.component.html',
  styleUrls: ['./weekly-card.component.scss'],
})
export class WeeklyCardComponent implements OnInit {
  page: string = '';
  singlePlan: IPlan | undefined;
  recipe!: RecipeModel;
  title: string = '';
  ingredient: string = '';
  id: number = 0;
  url: string = '';
  planName: string = '';
  breakfastData: SubRecipeResult[] = [];
  lunchData: SubRecipeResult[] = [];
  dinnerData: SubRecipeResult[] = [];

  fadeInOutAnimation = trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
  ]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mealPlanService: WeeklyRecipePlanService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const name = params['planName'];
      console.log(name);
      this.planName = name;
    });

    this.mealPlanService
      .fetchRecipes(this.planName, 'breakfast')
      .subscribe((data: any) => {
        console.log(data.results);
        this.breakfastData = data.results;
      });

    this.mealPlanService
      .fetchRecipes(this.planName, 'main course')
      .subscribe((data: any) => {
        console.log(data.results);
        this.lunchData = data.results;
      });

    this.mealPlanService
      .fetchRecipes(this.planName, 'snack')
      .subscribe((data: any) => {
        console.log(data.results);
        this.dinnerData = data.results;
      });
  }

  onClickBack() {
    this.router.navigate(['/meal-plan']);
  }

  getDetailedrecipe(event: Event) {
    event.preventDefault();
    this.mealPlanService
      .fetchDetailedRecipes(this.id)
      .subscribe((detailedRecipe: any) => {
        console.log(detailedRecipe);
        this.url = detailedRecipe.sourceUrl;

        window.open(this.url, '_blank');
      });
  }
}
