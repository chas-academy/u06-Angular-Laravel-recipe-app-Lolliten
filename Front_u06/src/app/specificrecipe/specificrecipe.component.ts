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
      ingredientLines: [],
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

  ngOnInit(): void { //ngOnInit is a lifecycle hook
    //paramMap is an Observable that contains a map of the route parameters extracted from the URL.
    //This line subscribes to changes in the route parameters using the ActivatedRoute service.
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.id = String(params.get("id")); //This line retrieves the value of the route parameter with the key "id". 
      if(this.id) { //This condition checks if the id property has a truthy value.
        console.log(this.id);
        this.showRecipe(this.id); //This line calls the showRecipe() method, passing the id as an argument. 
      }
    })
  }

  //responsible for fetching a specific recipe from the recipeService based on the provided id.
  showRecipe(id: string) {
    //This subscribes to the Observable returned by the getRecipeId method.
    this.recipeService.getRecipeId(id).subscribe({
      next: (data) =>{ //Callback function that handles successful response from getRecipeId Observable. It receives the fetched data as an argument (data).
        console.log("Getted data", data); //TA BORT
          let recipe: Reciperesponse = {
    label: data.title,
    image: data.image,
    ingredientLines: data.extendedIngredients,
    totalTime: data.cookingMinutes,
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
