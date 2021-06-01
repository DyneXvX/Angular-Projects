import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {HomeComponent} from "./home/home.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "shopping-list", component: ShoppingListComponent, children: [
      {path: "shopping-edit", component: ShoppingEditComponent}
    ]},
  {path: "recipes", component: RecipesComponent, children: [
      {path: '' , component: RecipeStartComponent},
      {path: ":id", component: RecipeDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
