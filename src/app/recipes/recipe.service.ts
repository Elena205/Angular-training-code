import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://oksmoothie.com/image/75_420c.jpg'),
    new Recipe('Another Test Recipe','This is simply a test','https://oksmoothie.com/image/75_420c.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}