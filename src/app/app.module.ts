import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeSearchFormComponent } from './recipe-search-form/recipe-search-form.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
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
import { ɵAnimationStyleNormalizer } from '@angular/animations/browser';
import { FoodComponent } from './food/food.component';
import { DrinkComponent } from './drink/drink.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './recipe.reducer';
import { ShoppingComponent } from './Shopping-list/shopping/shopping.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { environmentFirebase } from './environments/environment';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from './login/firebase.service';
import { LoginUserProfileComponent } from './login-user-profile/login-user-profile.component';
import { QuantityConversionPipe } from './pipes/quantity-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactDialogBoxComponent,
    RecipeSearchFormComponent,
    RecipeResultsComponent,
    RecipeDetailsComponent,
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
    NgbModule,
    StoreModule.forRoot({ favorites: recipeReducer }),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      { path: 'search', component: RecipeSearchFormComponent },
      { path: 'results', component: RecipeResultsComponent },
      { path: 'recipe/:id', component: RecipeDetailsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'meal-plan', component: WeeklyMealPlanComponent },
    ]),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
