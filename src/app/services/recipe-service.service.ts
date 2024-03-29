import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Recipe } from '../interfaces/recipe/recipe.model';

export interface RecipeSearchParams {
  ingredients: string[];
  dishType: string[];
  diet: string[];
  health: string[];
  cuisineType: string[];
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly RESULTS_KEY = 'searchResults';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  API_ENDPOINT = 'https://api.edamam.com/search';
  APP_ID = environment.APP_ID;
  APP_KEY = environment.APP_KEY;

  searchRecipes(searchParams: RecipeSearchParams, from: number = 0, to: number = 10): Observable<any> {

    let httpParams = new HttpParams()
      .set('app_id', this.APP_ID)
      .set('app_key', this.APP_KEY)
      .set('q', searchParams.ingredients.join(','))
      .set('from', String(from))
      .set('to', String(to));

    if (from !== undefined) {
      httpParams = httpParams.set('from', String(from));
    }
    if (to !== undefined) {
      httpParams = httpParams.set('to', String(to));
    }

    if (searchParams.cuisineType.length > 0) {
      httpParams = httpParams.set(
        'cuisineType',
        searchParams.cuisineType.join(',')
      );
    }

    if (searchParams.dishType.length > 0) {
      httpParams = httpParams.set('dishType', searchParams.dishType.join(','));
    }

    if (searchParams.diet.length > 0) {
      httpParams = httpParams.set('diet', searchParams.diet.join(','));
    }

    if (searchParams.health.length > 0) {
      httpParams = httpParams.set('health', searchParams.health.join(','));
    }

    return this.http.get<any>(this.API_ENDPOINT, { params: httpParams }).pipe(
      tap((results) => {

        const existingResults = this.getLastSearchResults();


        const updatedResults = existingResults.concat(results.hits);


        this.localStorageService.setItem(
          this.RESULTS_KEY,
          JSON.stringify(updatedResults)
        );
      })
    );
  }


  getLastSearchResults(): { recipe: Recipe }[] {
    const results = this.localStorageService.getItem(this.RESULTS_KEY);
    return results ? JSON.parse(results) : [];
  }

  clearLastSearchResults() {
    this.localStorageService.removeItem(this.RESULTS_KEY);
  }

  private _url: string =
  `${this.API_ENDPOINT}?app_id=${this.APP_ID}&app_key=${this.APP_KEY}&to=1&q=`;

  searchRandomRecipes() {
    const cuisineType = [
      'american',
      'asian',
      'british',
      'chinese',
      'greek',
      'indian',
      'italian',
      'mediterranean',
      'mexican',
      'world',
    ];
    const meatType = ['Pork', 'Chicken', 'Lamb', 'Beef'];

    const randomCuisineType = Math.floor(Math.random() * cuisineType.length);
    const randomMeatType = Math.floor(Math.random() * meatType.length);

    const searchParams =
      meatType[randomMeatType] +
      '&cuisineType=' +
      cuisineType[randomCuisineType];

    const randomRecipe = this._url + searchParams;

    return this.http.get<any>(randomRecipe);
  }

  searchRandomDrink() {
    const drinkType = [
      'Vodka',
      'Wine',
      'Beer',
      'Milk',
      'Juice',
      'Apple',
      'Banana',
      'Juice',
      'Smoothie',
      'Cocktail',
    ];

    const randomDrinkType = Math.floor(Math.random() * drinkType.length);
    const searchParams = drinkType + '&dishType=Drinks';

    const randomDrink = this._url + drinkType[randomDrinkType];

    return this.http.get<any>(randomDrink);
  }
}
