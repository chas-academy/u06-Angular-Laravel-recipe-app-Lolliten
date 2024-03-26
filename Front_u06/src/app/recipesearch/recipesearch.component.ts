import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.scss'
})
export class RecipesearchComponent {

  recipes?: Recipe;

  searchterm = "chicken";

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipe(this.searchterm,).subscribe(result) =>
    console.log(result);
    let recipe: Recipe[];
    recipes = result.hits.map[item => {
      
    }]

    id: number;
    title: string;
    nutrition: string;
    allergenes: string;
    photo: string;
  }
}
