import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../services/ingredients.service';
import { DishesService } from '../../services/dishes.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string;
  recipe: any;
  ingredients: any;
  ingredientId: string;

  constructor(private dishes: DishesService, private route: ActivatedRoute,  private IngredientsService: IngredientsService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.recipeId = params['id']);
    this.getRecipe();
    this.getIngredients();

  }

  getRecipe() {
    this.dishes.getRecipe(this.recipeId)
      .subscribe((recipe) => this.recipe = recipe);
  }

  getIngredients() {
    this.IngredientsService.getIngredients()
      .subscribe((ingredients) => this.ingredients = ingredients);
  }

  handleAddIngredient(ingredientId, dishId, quantity) {
    this.dishes.postIngredients(ingredientId, dishId, quantity)
    this.recipe.ingredients.forEach((element)=>{
      if (element.ingredientId._id === ingredientId) {
        element.quantity = parseInt(element.quantity) + parseInt(quantity)
      }
    });
  }

}
