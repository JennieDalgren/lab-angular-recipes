import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DishesService } from '../../services/dishes.service';
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string;
  recipe: Recipe;

  constructor(private dishes: DishesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.recipeId = params['id']
      this.dishes.getRecipe(this.recipeId)
        .subscribe((recipe) => this.recipe = recipe);
    })

  }

}
