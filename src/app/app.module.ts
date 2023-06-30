import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchFormComponent } from './recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { WeeklyMealPlanComponent } from './weekly-meal-plan/weekly-meal-plan.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchFormComponent,
    RecipeResultsComponent,
    RecipeDetailsComponent,
    FavoriteRecipesComponent,
    WeeklyMealPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      { path: 'search', component: RecipeSearchFormComponent },
      { path: 'results', component: RecipeResultsComponent },
      { path: 'recipe/:id', component: RecipeDetailsComponent },
      { path: 'favorites', component: FavoriteRecipesComponent },
      { path: 'meal-plan', component: WeeklyMealPlanComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
