import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeSearchFormComponent } from './recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WeeklyMealPlanComponent } from './weekly-meal-plan/weekly-meal-plan.component';
import { WeeklyCardComponent } from './weekly-card/weekly-card.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { ShoppingComponent } from './Shopping-list/shopping/shopping.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: RecipeSearchFormComponent },
  { path: 'results', component: RecipeResultsComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'meal-plan', component: WeeklyMealPlanComponent },
  { path: 'meal-plan/:planName', component: WeeklyCardComponent },
  { path: 'food-and-drink', component: FoodAndDrinkComponent },
  { path: 'shopping-list', component: ShoppingComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/meal-plan', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
