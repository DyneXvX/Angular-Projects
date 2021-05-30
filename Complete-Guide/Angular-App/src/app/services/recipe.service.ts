import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "../recipes/models/recipe.model";
import {Ingredient} from "../shared/models/ingredient.models";
import {ShoppingListService} from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg',
      [new Ingredient('Meat', 5),
        new Ingredient('Other Stuff', 25)]),
    new Recipe('Another Test', 'They keep coming.', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43.jpg',
      [new Ingredient('Random', 25),
      new Ingredient(`Random Stuff I couldn't think of`, 125)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
  constructor(private shoppingListService: ShoppingListService) {
  }
}
