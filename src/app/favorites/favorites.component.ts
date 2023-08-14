import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getFavorites } from '../recipe.reducer';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs';
import { removeRecipeFromFavorites } from '../recipe.action';
import { LocalStorageService } from '../local-storage.service';
import { ShoppingListService } from '../Shopping-list/shopping-list.service';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  fav: Recipe[] = [];
  favorites: Recipe[] = [];
  favorites$: Observable<{ favorites: Recipe[] }>;

  constructor(
    private store: Store<{ favorites: { favorites: Recipe[] } }>,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,

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

  clearAllData(): void {
    this.localStorageService.clearStorage(); // call clearStorage method
  }

  removeFavorite(favorite: Recipe): void {
    this.store.dispatch(removeRecipeFromFavorites({ recipe: favorite }));

    // Load favorites from local storage
    let favorites = this.localStorageService.getItem('favorites');

    // Filter out the favorite to be removed
    favorites = favorites.filter((fav: Recipe) => fav.uri !== favorite.uri);

    // Save the updated favorites back to local storage
    this.localStorageService.setItem('favorites', favorites);
  }

  onClickBack() {
    this.router.navigate(['/results']);
  }

  showTags: boolean = false;

  //Sameetah's changes to add ingredient from selected favorite recipe to shopping list service file
  addToShoppingList(recipe: Recipe) {
    this.shoppingService.addNewRecipeToSL(recipe);
    console.log(recipe);
  }
}
