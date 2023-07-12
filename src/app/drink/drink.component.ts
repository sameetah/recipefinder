import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent  implements OnInit{

  randomDrink: any = []
  
  constructor(private random: RecipeService ) {}
  
  ngOnInit() {
    this.random.searchRandomDrink().subscribe(response =>  this.randomDrink = response.hits[0].recipe);
  }
  }