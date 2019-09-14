import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';


//as we will use shoppingListService from Recipe service
@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A Test Recipe",
        "A test description",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFgzYhkty0oG9rdhJiw2Qh6Zx2PIpsGxlyNVjQSTx9FLev-_C",
             [new Ingredient('meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe("Burger",
        "A test description",
        "https://cdn-image.foodandwine.com/sites/default/files/1559057296/Burger-National-Hamburger-Day-FT-Blog0619.jpg", 
        [new Ingredient('Bread', 1), new Ingredient('Meat', 1)])
      ];

      constructor(private sLService : ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      } 

      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.sLService.addIngredients(ingredients);
      }
}