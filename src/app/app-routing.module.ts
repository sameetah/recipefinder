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
import { CustomMealPlanComponent } from './weekly-meal-plan/custom-meal-plan/custom-meal-plan.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';

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
  { path: 'login', component: LoginComponent },
  { path: 'make-custom-meal-plan', component: CustomMealPlanComponent },
  { path: '', redirectTo: '/meal-plan', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
