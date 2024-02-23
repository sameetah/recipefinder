import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Recipe } from 'src/app/interfaces/recipe/recipe.model';
import { getFavorites } from 'src/app/interfaces/recipe/recipe.reducer';

@Component({
  selector: 'app-custom-meal-plan',
  templateUrl: './custom-meal-plan.component.html',
  styleUrls: ['./custom-meal-plan.component.scss'],
})
export class CustomMealPlanComponent {
  weekdays: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  fav: Recipe[] = [];
  favorites: Recipe[] = [];
  favorites$: Observable<{ favorites: Recipe[] }>;
  constructor(
    private store: Store<{ favorites: { favorites: Recipe[] } }>,
    private localStorageService: LocalStorageService,

    private shoppingService: ShoppingListService //injecting an instance of shopping-list service  made by Sameetah
  ) {
    this.favorites$ = store.pipe(select(getFavorites));
  }

  ngOnInit(): void {
    this.favorites$.subscribe((data) => {
      if (data && data.favorites) {
        this.favorites = data.favorites;
      } else {
        this.favorites = [];
      }
      console.log(this.favorites);
    });
  }
}
