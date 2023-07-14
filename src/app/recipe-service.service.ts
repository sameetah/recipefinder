import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 
  private apiKey = '39acb22fea92153f6dcc90a9ad66adea'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  searchRecipes(searchParams: any): Observable<any> {
    const API_ENDPOINT = 'https://api.edamam.com/search';
    const APP_ID = '46f85330'; // Replace with your actual Edamam app ID
    const APP_KEY = '39acb22fea92153f6dcc90a9ad66adea'; // Replace with your actual Edamam app key
  
    const queryParams = {
      q: searchParams.ingredients,
      dishType: searchParams.dishType.join(','),
      diet: searchParams.diet.join(','),
      health: searchParams.health.join(','),
      cuisineType: searchParams.cuisineType.join(',')
    };
  
    let apiUrl = `${API_ENDPOINT}?app_id=${APP_ID}&app_key=${APP_KEY}&q=${encodeURIComponent(
      searchParams.ingredients
    )}`;
    
    if (searchParams.cuisineType.length > 0) {
      apiUrl += `&cuisineType=${encodeURIComponent(searchParams.cuisineType.join(','))}`;
    }
    
    if (searchParams.dishType.length > 0) {
      apiUrl += `&dishType=${encodeURIComponent(searchParams.dishType.join(','))}`;
    }

    if (searchParams.diet.length > 0) {
      apiUrl += `&diet=${encodeURIComponent(searchParams.diet.join(','))}`;
    }
    
    if (searchParams.health.length > 0) {
      apiUrl += `&health=${encodeURIComponent(searchParams.health.join(','))}`;
    }
    
  
    console.log('API URL:', apiUrl);
  
    return this.http.get<any>(apiUrl);
  }


  
  private _url: string = 'https://api.edamam.com/search?app_id=46f85330&app_key=39acb22fea92153f6dcc90a9ad66adea&to=1&q='

  searchRandomRecipes() {
    const  cuisineType = ["american", "asian", "british", "chinese", "greek", "indian", "italian", "mediterranean", "mexican", "world"];
    const  meatType = ["Pork", "Chicken", "Lamb", "Beef"]
    
    const randomCuisineType = Math.floor(Math.random() * cuisineType.length);
    const randomMeatType = Math.floor(Math.random() * meatType.length);

    const searchParams = meatType[randomMeatType] + "&cuisineType=" + cuisineType[randomCuisineType]

  
    console.log( searchParams);
    console.log( this._url);

    const randomRecipe = this._url + searchParams

    console.log('1 RECIPE REQUEST', randomRecipe)
  
    return this.http.get<any>(randomRecipe)
  }

  searchRandomDrink() {
    const drinkType = ["Vodka", "Wine", "Beer", "Milk", "Juice", "Apple" , "Banana"  , "Juice", "Smoothie", "Cocktail"  ]

    const randomDrinkType = Math.floor(Math.random() * drinkType.length);
    const searchParams = drinkType + "&dishType=Drinks"
  
    console.log( searchParams);
    console.log( this._url);

    const randomDrink = this._url + drinkType[randomDrinkType] 

    console.log('1 DRINK REQUEST', randomDrink)
  
    return this.http.get<any>(randomDrink)
  }
  

  // Add more methods for interacting with the API, such as fetching recipe details, etc.
}