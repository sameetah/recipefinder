import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.scss']
})
export class RecipeResultsComponent implements OnInit {
  searchResults: any[] = []; // Array to store the search results

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Extract the search parameters from the query params
      const { ingredients, dishType, diet, allergies, cuisineType } = params;

      // Create the searchParams object to pass to the service
      const searchParams = {
        ingredients: ingredients ? ingredients.split(',') : [],
        dishType: dishType ? dishType.split(',') : [],
        diet: diet ? diet.split(',') : [],
        allergies: allergies ? allergies.split(',') : [],
        cuisineType: cuisineType ? cuisineType.split(',') : []
      };

      // Call the service method to search for recipes
      this.recipeService.searchRecipes(searchParams).subscribe((recipes: any) => {
        this.searchResults = recipes.hits; // Get the search results from the API response
      });
    });
  }
}