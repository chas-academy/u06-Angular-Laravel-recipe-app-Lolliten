import { Component, Input } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';

@Component({
  selector: 'app-recipeinfo',
  standalone: true,
  imports: [],
  templateUrl: './recipeinfo.component.html',
  styleUrl: './recipeinfo.component.scss'
})
export class RecipeinfoComponent {

  @Input() recipe: Recipeinfo={
    id: 2,
    title: "",
    nutrition: "",
    allergenes: "",
    photo: ""
  };

  /*
  ?? in right component ??

  import { RecipeService }

  recipeId: string | null | undefined;

  getRecipe: any;

  recipe: any;

    //insert init funtion in html
   ngOnInit() { }
   //this.recipe.Id here?

    fetchRecipeData() {
    if (!this.recipeId) {
      return;
    }

    this.recipeService.getRecipeById(this.recipeId).subscribe((result: any) => {
      this.getRecipes = result;

    //recipeInfo eller recipeDetails, reffering to the component?
    let recipeInfo = Object.values(this.getRecipes).map((res: any) => res)
    this.recipe = recipeInfo[0];

    ??

  */

}
