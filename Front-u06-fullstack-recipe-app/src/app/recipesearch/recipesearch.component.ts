import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.scss'
})
export class RecipesearchComponent {

   recipes? = any;

   constructor (private recipeService: RecipeService) {}

  this.recipeService.getRecipe("chicken").subscribe(res => { //hardcoded search for chicken FIX
    console.log(res); {from: 1, to: 20, } //wanna take in 1-20 recipes 
    this.recipes = res;
  });

  let recipeArray: any[] //takes in any type of data from array
  recipeArray = this.recipes.hits; //hits is a query call
  console.log(recipeArray); //list the array of recipes

let recipes = recipeArray.map(item => { //mappar tar info och link och sätter samman / mappar till en vy
  return {
    self: item._links.self.href, //detta är fran Edamam info
    label: item._recipe.label,
    image: item._recipe.image,
  }
});
console.table(recipes)
}
