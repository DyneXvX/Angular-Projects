import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466__340.jpg'),
    new Recipe('Another Test', 'They keep coming.', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
