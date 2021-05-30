import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.models";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients(){
    //copy of the array not the original!!
    return this.ingredients.slice();
    //to save the new ingredients however we need something different
    // return this.ingredients;
    //this allows us to change the original array allowing me to add to or delete from.
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // for (let ingredient of ingredients){
    //   this.addIngredients(ingredients)
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
