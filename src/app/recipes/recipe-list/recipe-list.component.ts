import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://oksmoothie.com/image/75_420c.jpg'),
    new Recipe('Another Test Recipe','This is simply a test','https://oksmoothie.com/image/75_420c.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
