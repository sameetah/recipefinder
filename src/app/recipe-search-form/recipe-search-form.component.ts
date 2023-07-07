import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe-service.service';


@Component({
  selector: 'app-recipe-search-form',
  templateUrl: './recipe-search-form.component.html',
  styleUrls: ['./recipe-search-form.component.scss']
})
export class RecipeSearchFormComponent implements OnInit {
  ingredients: string[] = [];
  ingredientInput: string = '';
  dishType: any[] = [];
  diet: any[] = [];
  allergies: any[] = [];
  cuisineType: any[] = [];

  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {
    this.showDishTypeCheckboxes = false;
    this.showdietCheckboxes = false;
    this.showAllergiesCheckboxes = false;
    this.showCuisineTypeCheckboxes = false;
  }

  searchRecipes() {
    const API_ENDPOINT = 'https://api.edamam.com/search';
    const APP_ID = '46f85330'; // Replace with your actual Edamam app ID
    const APP_KEY = '39acb22fea92153f6dcc90a9ad66adea'; // Replace with your actual Edamam app key

    const searchParams = {
      q: this.ingredients.join(','),
      ingredients: this.ingredients.join(','),
      dishType: this.dishType.filter(dishType => dishType.selected).map(dishType => dishType.value),
      diet: this.diet.filter(diet => diet.selected).map(diet => diet.value),
      allergies: this.allergies.filter(allergy => allergy.selected).map(allergy => allergy.value),
      cuisineType: this.cuisineType.filter(cuisine => cuisine.selected).map(cuisine => cuisine.value)
    };
  
    console.log('Search Params:', searchParams);
  
    const queryParams = {
      ingredients: searchParams.q,
      dishType: searchParams.dishType.join(','),
      diet: searchParams.diet.join(','),
      allergies: searchParams.allergies.join(','),
      cuisineType: searchParams.cuisineType.join(',')
    };
  
    console.log('Query Params:', queryParams);
  
    this.router.navigate(['/results'], { queryParams });
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

  // Define the dish types as an array of objects
  dishTypeList: any[] = [
    { label: 'Starter', value: 'Starter', selected: false },
    { label: 'Main Course', value: 'Main Course', selected: false },
    { label: 'Side Dish', value: 'Side Dish', selected: false },
    { label: 'Drinks', value: 'Drinks', selected: false },
    { label: 'Dessert', value: 'Dessert', selected: false }
  ];

  // Define the diet labels as an array of objects
  dietList: any[] = [
    { label: 'Balanced', value: 'balanced', selected: false },
    { label: 'High Fiber', value: 'high-fiber', selected: false },
    { label: 'High Protein', value: 'high-protein', selected: false },
    { label: 'Low Carb', value: 'low-carb', selected: false },
    { label: 'Low Fat', value: 'low-fat', selected: false },
    { label: 'Low Sodium', value: 'low-sodium', selected: false }
  ];

  // Define the allergies as an array of objects
  allergiesList = [
    { label: 'Dairy', value: 'Dairy', selected: false },
    { label: 'Egg', value: 'Egg', selected: false },
    { label: 'Gluten', value: 'Gluten', selected: false },
    { label: 'Peanut', value: 'Peanut', selected: false },
    { label: 'Soy', value: 'Soy', selected: false }
  ];

  // Define the cuisine types as an array of objects
  cuisineTypesList: any[] = [
    { label: 'American', value: 'American', selected: false },
    { label: 'Asian', value: 'Asian', selected: false },
    { label: 'Italian', value: 'Italian', selected: false },
    { label: 'Mexican', value: 'Mexican', selected: false },
    // Add other common cuisine types here
  ];

  // Function to toggle the selection of a cuisine type
  toggleCuisineType(cuisine: string) {
    const index = this.cuisineType.indexOf(cuisine);
    if (index > -1) {
      this.cuisineType.splice(index, 1);
    } else {
      this.cuisineType.push(cuisine);
    }
  }  
  
  // Function to toggle the selection of a dish type
  toggleDishType(dishType: string) {
    const index = this.dishType.indexOf(dishType);
    if (index > -1) {
      this.dishType.splice(index, 1);
    } else {
      this.dishType.push(dishType);
    }
  }  

  // Function to toggle the selection of a diet label
  togglediet(diet: string) {
    const index = this.diet.indexOf(diet);
    if (index > -1) {
      this.diet.splice(index, 1);
    } else {
      this.diet.push(diet);
    }
  }  

  // Function to toggle the selection of an allergy
  toggleAllergy(allergy: any) {
    allergy.selected = !allergy.selected;
  }

  showDishTypeCheckboxes = false;
  showdietCheckboxes = false;
  showAllergiesCheckboxes = false;
  showCuisineTypeCheckboxes = false;

  

  toggleCheckbox(field: string) {
    switch (field) {
      case 'dishType':
        this.showDishTypeCheckboxes = !this.showDishTypeCheckboxes;
        break;
      case 'diet':
        this.showdietCheckboxes = !this.showdietCheckboxes;
        break;
      case 'allergies':
        this.showAllergiesCheckboxes = !this.showAllergiesCheckboxes;
        break;
      case 'cuisineType':
        this.showCuisineTypeCheckboxes = !this.showCuisineTypeCheckboxes;
        break;
    }
  }
  
}