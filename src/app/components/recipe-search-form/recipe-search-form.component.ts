import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService, RecipeSearchParams } from '../../services/recipe-service.service';

@Component({
  selector: 'app-recipe-search-form',
  templateUrl: './recipe-search-form.component.html',
  styleUrls: ['./recipe-search-form.component.scss'],
})
export class RecipeSearchFormComponent implements OnInit {
  ingredients: string[] = [];
  ingredientInput: string = '';
  dishType: any[] = [];
  diet: any[] = [];
  health: any[] = [];
  cuisineType: any[] = [];
  showDishTypeCheckboxes = false;
  showdietCheckboxes = false;
  showhealthCheckboxes = false;
  showCuisineTypeCheckboxes = false;

  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {}

  searchRecipes() {
    const searchParams: RecipeSearchParams = {
      ingredients: this.ingredients,
      dishType: this.dishType
        .filter((dishType) => dishType.selected)
        .map((dishType) => dishType.value),
      diet: this.diet.filter((diet) => diet.selected).map((diet) => diet.value),
      health: this.health
        .filter((health) => health.selected)
        .map((health) => health.value),
      cuisineType: this.cuisineType
        .filter((cuisine) => cuisine.selected)
        .map((cuisine) => cuisine.value),
    };

    console.log('Search Params:', searchParams);

    this.recipeService.clearLastSearchResults();

    this.router.navigate(['/results'], { queryParams: searchParams });
  }

  addIngredient() {
    if (this.ingredientInput.trim() !== '') {
      this.ingredients.push(this.ingredientInput.trim());
      this.ingredientInput = '';
    }
  }

  removeIngredient(index: number) {
    if (index >= 0 && index < this.ingredients.length) {
      this.ingredients.splice(index, 1);
    }
  }

  dishTypeList: any[] = [
    { label: 'Starter', value: 'Starter', selected: false },
    { label: 'Main Course', value: 'Main Course', selected: false },
    { label: 'Side Dish', value: 'Side Dish', selected: false },
    { label: 'Drinks', value: 'Drinks', selected: false },
    { label: 'Dessert', value: 'Dessert', selected: false },
  ];

  dietList: any[] = [
    { label: 'Balanced', value: 'balanced', selected: false },
    { label: 'High Fiber', value: 'high-fiber', selected: false },
    { label: 'High Protein', value: 'high-protein', selected: false },
    { label: 'Low Carb', value: 'low-carb', selected: false },
    { label: 'Low Fat', value: 'low-fat', selected: false },
    { label: 'Low Sodium', value: 'low-sodium', selected: false },
  ];

  healthList: any[] = [
    { label: 'Dairy', value: 'dairy-free', selected: false },
    { label: 'Egg', value: 'egg-free', selected: false },
    { label: 'Gluten', value: 'gluten-free', selected: false },
    { label: 'Peanut', value: 'peanut-free', selected: false },
    { label: 'Soy', value: 'soy-free', selected: false },
  ];

  cuisineTypesList: any[] = [
    { label: 'American', value: 'American', selected: false },
    { label: 'Asian', value: 'Asian', selected: false },
    { label: 'Italian', value: 'Italian', selected: false },
    { label: 'Mexican', value: 'Mexican', selected: false },
  ];

  toggleCuisineType(cuisine: string) {
    const index = this.cuisineType.indexOf(cuisine);
    if (index > -1) {
      this.cuisineType.splice(index, 1);
    } else {
      this.cuisineType.push(cuisine);
    }
  }

  toggleDishType(dishType: string) {
    const index = this.dishType.indexOf(dishType);
    if (index > -1) {
      this.dishType.splice(index, 1);
    } else {
      this.dishType.push(dishType);
    }
  }

  togglediet(diet: string) {
    const index = this.diet.indexOf(diet);
    if (index > -1) {
      this.diet.splice(index, 1);
    } else {
      this.diet.push(diet);
    }
  }

  togglehealth(health: string) {
    const index = this.health.indexOf(health);
    if (index > -1) {
      this.health.splice(index, 1);
    } else {
      this.health.push(health);
    }
  }

  toggleCheckbox(field: string) {
    switch (field) {
      case 'dishType':
        this.showDishTypeCheckboxes = !this.showDishTypeCheckboxes;
        break;
      case 'diet':
        this.showdietCheckboxes = !this.showdietCheckboxes;
        break;
      case 'health':
        this.showhealthCheckboxes = !this.showhealthCheckboxes;
        break;
      case 'cuisineType':
        this.showCuisineTypeCheckboxes = !this.showCuisineTypeCheckboxes;
        break;
    }
  }
}
