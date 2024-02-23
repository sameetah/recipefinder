import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe-service.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  randomReceipe: any = [];

  constructor(private randomRecipe: RecipeService) {}

  ngOnInit() {
    this.randomRecipe
      .searchRandomRecipes()
      .subscribe((response) => (this.randomReceipe = response.hits[0].recipe));
  }
}
