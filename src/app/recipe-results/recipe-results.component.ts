import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService, RecipeSearchParams } from '../recipe-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { addRecipeToFavorites } from '../recipe.action';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('600ms ease', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms ease', style({ opacity: 0 }))]),
    ]),
  ],
})
export class RecipeResultsComponent implements OnInit {
  searchResults: { recipe: Recipe }[] = [];
  selectedRecipe: { recipe: Recipe } | null = null;
  dishType: string;
  diet: string;
  healthLabel: string;
  cuisine: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
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
    this.route.queryParams.subscribe((params) => {
      const searchParams: RecipeSearchParams = {
        ingredients: params['ingredients'] ? params['ingredients'] : [],
        dishType: params['dishType'] ? params['dishType'] : [],
        diet: params['diet'] ? params['diet'] : [],
        health: params['health'] ? params['health'] : [],
        cuisineType: params['cuisineType'] ? params['cuisineType'] : [],
      };

      this.searchResults = this.recipeService.getLastSearchResults();

      if (this.searchResults.length === 0) {
        this.recipeService
          .searchRecipes(searchParams)
          .subscribe((recipes: { hits: { recipe: Recipe }[] }) => {
            this.searchResults = recipes.hits;
          });
      }
    });
  }

  openRecipeDetails(recipe: { recipe: Recipe }, index: number) {
    this.selectedRecipe = recipe;
    this.currentRecipeIndex = index;
    this.dishType = recipe.recipe.dishType
      ? recipe.recipe.dishType.join(', ')
      : '';
    this.diet = recipe.recipe.dietLabels
      ? recipe.recipe.dietLabels.join(', ')
      : '';
    this.healthLabel = recipe.recipe.healthLabels
      ? recipe.recipe.healthLabels.join(', ')
      : '';
    this.cuisine = recipe.recipe.cuisineType
      ? recipe.recipe.cuisineType.join(', ')
      : '';
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
      this.dishType = this.selectedRecipe.recipe.dishType
        ? this.selectedRecipe.recipe.dishType.join(', ')
        : '';
      this.diet = this.selectedRecipe.recipe.dietLabels
        ? this.selectedRecipe.recipe.dietLabels.join(', ')
        : '';
      this.healthLabel = this.selectedRecipe.recipe.healthLabels
        ? this.selectedRecipe.recipe.healthLabels.join(', ')
        : '';
      this.cuisine = this.selectedRecipe.recipe.cuisineType
        ? this.selectedRecipe.recipe.cuisineType.join(', ')
        : '';
    }
  }

  navigateToPreviousRecipe() {
    if (this.currentRecipeIndex > 0) {
      this.currentRecipeIndex--;
      this.selectedRecipe = this.searchResults[this.currentRecipeIndex];
      this.dishType = this.selectedRecipe.recipe.dishType
        ? this.selectedRecipe.recipe.dishType.join(', ')
        : '';
      this.diet = this.selectedRecipe.recipe.dietLabels
        ? this.selectedRecipe.recipe.dietLabels.join(', ')
        : '';
      this.healthLabel = this.selectedRecipe.recipe.healthLabels
        ? this.selectedRecipe.recipe.healthLabels.join(', ')
        : '';
      this.cuisine = this.selectedRecipe.recipe.cuisineType
        ? this.selectedRecipe.recipe.cuisineType.join(', ')
        : '';
    }
  }

  addToFavorites(recipe: Recipe) {
    console.log('Dispatching action', recipe);
    this.store.dispatch(addRecipeToFavorites({ recipe }));
  }

  showTags: boolean = false;

  currentRecipeIndex: number = -1;
}
