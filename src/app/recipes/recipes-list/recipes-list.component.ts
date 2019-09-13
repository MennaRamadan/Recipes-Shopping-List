import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe","A test description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFgzYhkty0oG9rdhJiw2Qh6Zx2PIpsGxlyNVjQSTx9FLev-_C"),
    new Recipe("A Test Recipe","A test description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFgzYhkty0oG9rdhJiw2Qh6Zx2PIpsGxlyNVjQSTx9FLev-_C")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
