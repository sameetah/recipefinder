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
    this.mySubject$.subscribe((value) => {
      console.log('New Shopping List:', value);
      // Here you could store in local storage
    });
  }

  add(recipe: Recipe) {
    console.log('New Shopping List Item:', recipe);
    this.mySubject$.next([...this.mySubject$.getValue(), recipe]);
  }
}
