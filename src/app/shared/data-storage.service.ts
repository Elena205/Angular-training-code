import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DateStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
         recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http.get('https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json').subscribe(
      recipes => {
        console.log(recipes);
      }
    );
  }
}
