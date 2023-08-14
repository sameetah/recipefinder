import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeSearchFormComponent } from './components/recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './pages/recipe-results/recipe-results.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WeeklyMealPlanComponent } from './pages/weekly-meal-plan/weekly-meal-plan.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDialogBoxComponent } from './components/contact-dialog-box/contact-dialog-box.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WeeklyCardComponent } from './pages/weekly-card/weekly-card.component';
import { ɵAnimationStyleNormalizer } from '@angular/animations/browser';
import { FoodComponent } from './pages/food-and-drink/food/food.component';
import { DrinkComponent } from './pages/food-and-drink/drink/drink.component';
import { FoodAndDrinkComponent } from './pages/food-and-drink/food-and-drink.component';
import { FooterComponent } from './layout/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './interfaces/recipe/recipe.reducer';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { environmentFirebase } from './environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { FirebaseService } from './services/firebase.service';
import { LoginUserProfileComponent } from './components/login-user-profile/login-user-profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { QuantityConversionPipe } from './pipes/quantity-conversion.pipe';
import { CustomMealPlanComponent } from './weekly-meal-plan/custom-meal-plan/custom-meal-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactDialogBoxComponent,
    RecipeSearchFormComponent,
    RecipeResultsComponent,
    FavoritesComponent,
    WeeklyMealPlanComponent,
    NavbarComponent,
    WeeklyCardComponent,
    FoodComponent,
    DrinkComponent,
    FoodAndDrinkComponent,
    FooterComponent,
    ShoppingComponent,
    TitlecasePipe,
    LoginComponent,
    LoginUserProfileComponent,
    QuantityConversionPipe,
    CustomMealPlanComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environmentFirebase.firebaseConfig),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ favorites: recipeReducer }),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      { path: 'search', component: RecipeSearchFormComponent },
      { path: 'results', component: RecipeResultsComponent },
      { path: 'recipe/:id', component: RecipeResultsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'meal-plan', component: WeeklyMealPlanComponent },
    ]),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
