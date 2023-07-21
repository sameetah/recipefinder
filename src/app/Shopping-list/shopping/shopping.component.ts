import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient, Recipe } from 'src/app/recipe.model';
import { Subscription } from 'rxjs';
import { FavoritesComponent } from 'src/app/favorites/favorites.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  quantity = 0;
  fav: Recipe[] = [];
  constructor(private shoppingService: ShoppingListService) {
    this.shoppingService.mySubject$.subscribe((res) => {
      this.fav = res;
    });
  }

  ngOnInit() {}
  addNewRecipeToSL() {}

  deleteRecipe(recipe: Recipe) {
    const currentRecipes = this.shoppingService.mySubject$.getValue();
    const recipeIndex = currentRecipes.findIndex((r) => r === recipe);

    if (recipeIndex !== -1) {
      currentRecipes.splice(recipeIndex, 1);

      localStorage.setItem('shoppingList', JSON.stringify(currentRecipes));

      this.shoppingService.mySubject$.next([...currentRecipes]);
    }
  }

  decrementQuantity(ingredient: Ingredient) {
    ingredient.quantity--;
    localStorage.setItem('shoppingList', JSON.stringify(ingredient.quantity));

    this.shoppingService.mySubject$.next([...this.fav]);
  }
  incrementQuantity(ingredient: Ingredient) {
    ingredient.quantity++;
    localStorage.setItem('shoppingList', JSON.stringify(this.fav));
    this.shoppingService.mySubject$.next([...this.fav]);
  }

  /*  updateLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(this.fav));
    this.shoppingService.mySubject$.next([...this.fav]); // Update the ShoppingListService with the new shopping list
  } */
}
