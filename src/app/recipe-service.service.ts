import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { environment } from './environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Recipe } from './recipe.model';

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

  searchRecipes(searchParams: RecipeSearchParams, from: number = 0, to: number = 10): Observable<any> {
    const API_ENDPOINT = 'https://api.edamam.com/search';
    const APP_ID = environment.APP_ID;
    const APP_KEY = environment.APP_KEY;

    let httpParams = new HttpParams()
      .set('app_id', APP_ID)
      .set('app_key', APP_KEY)
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

    return this.http.get<any>(API_ENDPOINT, { params: httpParams }).pipe(
      tap((results) => {
        this.localStorageService.setItem(
          this.RESULTS_KEY,
          JSON.stringify(results.hits)
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
    'https://api.edamam.com/search?app_id=46f85330&app_key=39acb22fea92153f6dcc90a9ad66adea&to=1&q=';

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

    console.log(searchParams);
    console.log(this._url);

    const randomRecipe = this._url + searchParams;

    console.log('1 RECIPE REQUEST', randomRecipe);

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

    console.log(searchParams);
    console.log(this._url);

    const randomDrink = this._url + drinkType[randomDrinkType];

    console.log('1 DRINK REQUEST', randomDrink);

    return this.http.get<any>(randomDrink);
  }
}
