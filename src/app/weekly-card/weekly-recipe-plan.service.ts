import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '../weekly-meal-plan/weekly-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class WeeklyRecipePlanService {
  private apiUrl: string =
    'https://api.spoonacular.com/recipes/complexSearch?apiKey=82ea8ce52c8f4c148404cb7af2cb4b17';

  constructor(private http: HttpClient) {}

  fetchRecipes(name: string, mealType: string) {
    const params = {
      type: mealType,
      number: '7',
      diet: name,
    };
    return this.http.get<RecipeModel>(this.apiUrl, { params });
  }

  fetchDetailedRecipes(id: number) {
    const params = {
      includeNutrition: true,
    };
    return this.http.get<any>(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=82ea8ce52c8f4c148404cb7af2cb4b17`,
      { params }
    );
  }
}
