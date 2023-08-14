import { createReducer, on } from '@ngrx/store';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from './recipe.action';
import { Recipe } from './recipe.model';
import { LocalStorageService } from '../../services/local-storage.service';

export interface State {
  favorites: Recipe[];
}

const localStorageService = new LocalStorageService();

export const initialState: State = {
  favorites: localStorageService.getItem('favorites') || [], // Load favorite recipes from localStorage
};

export const recipeReducer = createReducer(
  initialState,
  on(addRecipeToFavorites, (state, { recipe }) => {
    const updatedFavorites = [...state.favorites, recipe];
    localStorageService.setItem('favorites', updatedFavorites); // Save updated favorites to localStorage
    return { ...state, favorites: updatedFavorites };
  }),
  on(removeRecipeFromFavorites, (state, { recipe }) => ({
    ...state,
    favorites: recipe
      ? state.favorites.filter((r) => r.uri !== recipe.uri)
      : [...state.favorites],
  }))
);

export const getFavorites = (state: { favorites: { favorites: Recipe[] } }) =>
  state.favorites;
