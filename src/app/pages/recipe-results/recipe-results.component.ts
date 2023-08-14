import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService, RecipeSearchParams } from '../../services/recipe-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { addRecipeToFavorites } from '../../interfaces/recipe/recipe.action';
import { Recipe } from '../../interfaces/recipe/recipe.model';

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
  from: number = 0;
  to: number = 10;
  searchParams: RecipeSearchParams | null = null;
  showTags: boolean = false;
  currentRecipeIndex: number = -1
  isLoading: boolean = false;

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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (!this.isLoading && this.isBottom()) {
      this.loadMoreRecipes();
    }
  }  

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = {
        ingredients: params['ingredients'] ? params['ingredients'] : [],
        dishType: params['dishType'] ? params['dishType'] : [],
        diet: params['diet'] ? params['diet'] : [],
        health: params['health'] ? params['health'] : [],
        cuisineType: params['cuisineType'] ? params['cuisineType'] : [],
      };

      this.searchResults = this.recipeService.getLastSearchResults();

      if (this.searchResults.length === 0) {
        this.recipeService
          .searchRecipes(this.searchParams, this.from, this.to)
          .subscribe((recipes: { hits: { recipe: Recipe }[] }) => {
            this.searchResults = recipes.hits;
            this.from = this.to;
            this.to += 10;
          });
      }
    });
}


loadMoreRecipes() {
  if (this.searchParams && !this.isLoading) {
    this.isLoading = true;
    this.recipeService
      .searchRecipes(this.searchParams, this.from, this.to)
      .subscribe((recipes: { hits: { recipe: Recipe }[] }) => {
        this.searchResults = [...this.searchResults, ...recipes.hits];

        this.from = this.to;
        this.to += 10;
        
        this.isLoading = false;
      });
  }
}

isBottom(): boolean {
  const tolerance = 10;
  return (window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - tolerance;
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
}
