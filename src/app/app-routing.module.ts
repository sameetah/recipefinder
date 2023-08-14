import { Routes, RouterModule } from '@angular/router';
import { RecipeSearchFormComponent } from './components/recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './pages/recipe-results/recipe-results.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WeeklyMealPlanComponent } from './pages/weekly-meal-plan/weekly-meal-plan.component';
import { WeeklyCardComponent } from './pages/weekly-card/weekly-card.component';
import { FoodAndDrinkComponent } from './pages/food-and-drink/food-and-drink.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CustomMealPlanComponent } from './weekly-meal-plan/custom-meal-plan/custom-meal-plan.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: RecipeSearchFormComponent },
  { path: 'results', component: RecipeResultsComponent },
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
