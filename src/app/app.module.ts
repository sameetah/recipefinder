import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeSearchFormComponent } from './recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { WeeklyMealPlanComponent } from './weekly-meal-plan/weekly-meal-plan.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDialogBoxComponent } from './contact-dialog-box/contact-dialog-box.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { WeeklyCardComponent } from './weekly-card/weekly-card.component';
import { RouterModule } from '@angular/router';
import { ɵAnimationStyleNormalizer } from '@angular/animations/browser';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactDialogBoxComponent,
    RecipeSearchFormComponent,
    RecipeResultsComponent,
    RecipeDetailsComponent,
    FavoriteRecipesComponent,
    WeeklyMealPlanComponent,
    NavbarComponent,
    WeeklyCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule,
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
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
