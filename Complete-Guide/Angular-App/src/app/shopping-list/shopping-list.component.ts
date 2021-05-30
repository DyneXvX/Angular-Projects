import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.models";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    //this is only needed if we are slicing the original array
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      })
  }

}
