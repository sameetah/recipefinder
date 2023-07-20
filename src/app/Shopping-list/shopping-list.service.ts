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
    this.mySubject$.next([...this.mySubject$.getValue(), recipe]);
  }
}
