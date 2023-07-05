import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeSearchFormComponent } from './recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { WeeklyMealPlanComponent } from './weekly-meal-plan/weekly-meal-plan.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: RecipeSearchFormComponent },
  { path: 'results', component: RecipeResultsComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'favorites', component: FavoriteRecipesComponent },
  { path: 'meal-plan', component: WeeklyMealPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
