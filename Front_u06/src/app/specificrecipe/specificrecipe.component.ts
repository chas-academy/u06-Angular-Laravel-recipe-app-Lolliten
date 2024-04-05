import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Reciperesponse } from '../Interfaces/reciperesponse';


@Component({
  selector: 'app-specificrecipe',
  standalone: true,
  imports: [],
  templateUrl: './specificrecipe.component.html',
  styleUrl: './specificrecipe.component.css'
})
export class SpecificrecipeComponent implements OnInit {


  id?: string;
  recipe: Reciperesponse;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.recipe={
      label: "",
      image: "",
      ingredientLines: "",
      totalTime: 0,
      yield: 0,
      dietLabels: "",
      cautions: "",
      cuisineType: "",
      mealType: "",
      dishType: "",
      instructions: "",
      tags: "",
      self: "",
    }
  }//initial the data type (empty data)

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = String(params.get("id"));
      if(this.id) {
        console.log(this.id);
        this.showRecipe(this.id);
      }
    })
  }

  showRecipe(id: string) {
    console.log("Show specific recipe")
    this.recipeService.getRecipeId(id).subscribe({
      next: (data) =>{
        console.log("Getted data", data);
          let recipe: Reciperesponse = {
    label: data.label,
    image: data.image,
    ingredientLines: data.ingredientLines,
    totalTime: data.totalTime,
    yield: data.yield,
    dietLabels: data.dietLabels,
    cautions: data.cautions,
    cuisineType: data.cuisineType,
    mealType: data.mealType,
    dishType: data.dishType,
    instructions: data.instructions,
    tags: data.tags,
    self: data.self,
  };
        this.recipe = recipe;
      },
      error: (error) => {
        console.error("Error fetch recipe", error);
      }
    })
  }

  //this displays the specific recipe info
  /*let recipe: RecipeResponse = {
    label: res.recipe.label,
    image: res.recipe.image,
    ingredientLines: res.recipe.ingredientLines,
    totalTime: res.recipe.totalTime,
    yield: res.recipe.yield,
    dietLabels: res.recipe.dietLabels,
    cautions: res.recipe.cautions,
    cuisineType: res.recipe.cuisineType,
    mealType: res.recipe.mealType,
    dishType: res.recipe.dishType,
    instructions: res.recipe.instructions,
    tags: res.recipe.tags,
    self: res?.self,
  };*/
}
