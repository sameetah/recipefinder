import { createAction, props } from '@ngrx/store';
import { Recipe } from './recipe.model';

export const addRecipeToFavorites = createAction(
  '[Recipe List] Add Recipe to Favorites',
  props<{ recipe: Recipe }>()
);

export const removeRecipeFromFavorites = createAction(
  '[Recipe List] Remove Recipe from Favorites',
  props<{ recipe: Recipe }>()
);
