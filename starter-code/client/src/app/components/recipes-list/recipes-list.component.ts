import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes: Object[];


  constructor(private dishes: DishesService) { }

  ngOnInit() {
    this.dishes.getRecipes()
      .subscribe((recipes) => this.recipes = recipes);
  }



}
