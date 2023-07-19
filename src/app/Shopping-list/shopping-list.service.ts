import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { LocalStorageService } from '../local-storage.service';
import { Observable } from 'rxjs/internal/Observable';
import { getFavorites } from '../recipe.reducer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  mySubject$ = new Subject<Recipe[]>();

  constructor() {}
}
