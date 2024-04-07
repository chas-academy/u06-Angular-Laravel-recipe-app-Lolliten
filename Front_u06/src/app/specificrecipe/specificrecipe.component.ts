import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Reciperesponse } from '../Interfaces/reciperesponse';


@Component({
  selector: 'app-specificrecipe',
  standalone: true,
  imports: [],
  templateUrl: './specificrecipe.component.html',
  styleUrl: './specificrecipe.component.css',
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
      readyInMinutes: "",
      diet: "",
      excludeCuisine: "",
      type: "",
      dishTypes: "",
      instructions: "",
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
      //Callback function that handles successful response from getRecipeId Observable.
      //It receives the fetched data as an argument (data).
      next: (data) =>{  
        console.log("Getted data", data);
        let recipe: Reciperesponse = {
    label: data.title,
    image: data.image,
    ingredientLines: data.extendedIngredients,
    readyInMinutes: data.readyInMinutes,
    diet: data.diet,
    excludeCuisine: data.excludeCuisine,
    type: data.mealType,
    dishTypes: data.dishTypes,
    instructions: data.instructions,
  };
        this.recipe = recipe;
      },
      error: (error) => {
        console.error("Error fetch recipe", error);
      }
    })
  }
}
