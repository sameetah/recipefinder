import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Recipe } from 'src/app/recipe.model';
import { Subscription } from 'rxjs';
import { FavoritesComponent } from 'src/app/favorites/favorites.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  fav: Recipe[] = [];
  constructor(private shoppingService: ShoppingListService) {
    this.shoppingService.mySubject$.subscribe((res) => {
      this.fav = res;
    });
  }

  ngOnInit() {}
}
