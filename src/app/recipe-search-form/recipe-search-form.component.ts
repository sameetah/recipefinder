import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe-service.service';
import './recipe-search-form.component.scss';


@Component({
  selector: 'app-recipe-search-form',
  templateUrl: './recipe-search-form.component.html',
  styleUrls: ['./recipe-search-form.component.scss']
})
export class RecipeSearchFormComponent implements OnInit {
  ingredients: string[] = [];
  ingredientInput: string = '';
  dishTypes: string[] = [];
  dietLabels: string[] = [];
  allergies: string[] = [];
  cuisineType: string[] = [];;

  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {}

  searchRecipes() {
    this.router.navigate(['/results']);
  }

  addIngredient() {
    if (this.ingredientInput.trim() !== '') {
      this.ingredients.push(this.ingredientInput.trim());
      this.ingredientInput = '';
    }
  }

  removeIngredient(ingredient: string) {
    const index = this.ingredients.indexOf(ingredient);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
  }
}
