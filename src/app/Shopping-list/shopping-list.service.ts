import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  // Instead of empty array as initial value
  // you could load from local storage if
  // shopping list exists there
  mySubject$ = new BehaviorSubject<Recipe[]>([]);

  constructor() {
    const shoppingListData = localStorage.getItem('shoppingList');

    if (shoppingListData) {
      const parsedData = JSON.parse(shoppingListData);
      this.mySubject$.next(parsedData);
    }

    this.mySubject$.subscribe((value) => {
      console.log('New Shopping List:', value);

      // Storing in local storage
      localStorage.setItem('shoppingList', JSON.stringify(value));
    });
  }

  addNewRecipeToSL(recipe: Recipe) {
    console.log('New Shopping List Item:', recipe);
    this.mySubject$.next(
      this.mySubject$.getValue().concat(
        // This madness is to ensure writability
        // to items in the shopping list.
        // Basically just creating a mutable copy.
        JSON.parse(JSON.stringify(recipe))
        // Other way of achieving that, dependant
        // on our specific recipe structure:
        // {
        //   ...recipe,
        //   ingredients: recipe.ingredients.map((ingredient) => ({
        //     ...ingredient,
        //   })),
        // },
      )
    );
  }

  /*one common standard weight for a packet of flour in Germany is 1 kilogram (kg), which is equivalent to 1000 grams (g).
  Number of packets needed = Total amount of flour required / Weight of flour in each packet
  you might find a small jar or bottle with 100ml if i want 2 tabespoon of some ingredient
  Pre-packaged Small Portions: For commonly used ingredients, you might find pre-packaged small portions that contain the required amount for recipes. For example, you might find sachets containing 2 tablespoons of the ingredient.
  . So, if your recipe calls for 2 tablespoons of lemon juice, you would need about 30 milliliters of lemon juice.*/
}
