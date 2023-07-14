import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('600ms ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RecipeResultsComponent implements OnInit {
  searchResults: any[] = [];
  selectedRecipe: any = null;
  dishType: string;
  diet: string;
  healthLabel: string;
  cuisine: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {    
    this.dishType = '';
    this.diet = '';
    this.healthLabel = '';
    this.cuisine = '';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.navigateToPreviousRecipe();
    } else if (event.key === 'ArrowRight') {
      this.navigateToNextRecipe();
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const { ingredients, dishType, diet, health, cuisineType } = params;
      const searchParams = {
        ingredients: ingredients ? ingredients.split(',') : [],
        dishType: dishType ? dishType.split(',') : [],
        diet: diet ? diet.split(',') : [],
        health: health ? health.split(',') : [],
        cuisineType: cuisineType ? cuisineType.split(',') : []
      };

      this.recipeService.searchRecipes(searchParams).subscribe((recipes: any) => {
        this.searchResults = recipes.hits;
      });
    });
  }

  openRecipeDetails(recipe: any, index: number) {
    this.selectedRecipe = recipe;
    this.currentRecipeIndex = index;
    this.dishType = recipe.recipe.dishType ? recipe.recipe.dishType.join(', ') : '';
    this.diet = recipe.recipe.dietLabels ? recipe.recipe.dietLabels.join(', ') : '';
    this.healthLabel = recipe.recipe.healthLabels ? recipe.recipe.healthLabels.join(', ') : '';
    this.cuisine = recipe.recipe.cuisineType ? recipe.recipe.cuisineType.join(', ') : '';
  }

  closeRecipeDetails() {
    this.selectedRecipe = null;
    this.dishType = '';
    this.diet = '';
    this.healthLabel = '';
    this.cuisine = '';
  }

  navigateToNextRecipe() {
    if (this.currentRecipeIndex < this.searchResults.length - 1) {
      this.currentRecipeIndex++;
      this.selectedRecipe = this.searchResults[this.currentRecipeIndex];
      this.dishType = this.selectedRecipe.recipe.dishType ? this.selectedRecipe.recipe.dishType.join(', ') : '';
      this.diet = this.selectedRecipe.recipe.dietLabels ? this.selectedRecipe.recipe.dietLabels.join(', ') : '';
      this.healthLabel = this.selectedRecipe.recipe.healthLabels ? this.selectedRecipe.recipe.healthLabels.join(', ') : '';
      this.cuisine = this.selectedRecipe.recipe.cuisineType ? this.selectedRecipe.recipe.cuisineType.join(', ') : '';
    }
  }
  
  navigateToPreviousRecipe() {
    if (this.currentRecipeIndex > 0) {
      this.currentRecipeIndex--;
      this.selectedRecipe = this.searchResults[this.currentRecipeIndex];
      this.dishType = this.selectedRecipe.recipe.dishType ? this.selectedRecipe.recipe.dishType.join(', ') : '';
      this.diet = this.selectedRecipe.recipe.dietLabels ? this.selectedRecipe.recipe.dietLabels.join(', ') : '';
      this.healthLabel = this.selectedRecipe.recipe.healthLabels ? this.selectedRecipe.recipe.healthLabels.join(', ') : '';
      this.cuisine = this.selectedRecipe.recipe.cuisineType ? this.selectedRecipe.recipe.cuisineType.join(', ') : '';
    }
  }
  

showTags: boolean = false;

currentRecipeIndex: number = -1;


}
