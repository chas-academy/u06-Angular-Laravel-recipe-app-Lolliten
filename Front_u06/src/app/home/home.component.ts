import { Component } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';
import { RecipeinfoComponent } from '../recipeinfo/recipeinfo.component';
import { RecipeService } from '../services/recipe.service';
import { Filter } from '../Interfaces/filter';
import { FormsModule } from '@angular/forms';
import { SpecificrecipeComponent } from '../specificrecipe/specificrecipe.component';
import { RouterLink } from '@angular/router';
//import { FormatterPipe } from '../Pipes/formatter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeinfoComponent, FormsModule, SpecificrecipeComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  
  filter: Filter ={
    query: "",
    mealtype: "",
    diet: "",
    intolerances: ""
  }

  recipes?: Recipeinfo[]; //undefined

  constructor(private recipeService: RecipeService) { }

  onSubmit() {
    //Logs the filter object to the console. It helps in debugging by showing what filter parameters are being sent to the backend for fetching recipes.
    console.log(this.filter);
    //Calls the getRecipes() method of the recipeService, passing the filter object as a parameter.
    // It subscribes to the Observable returned by getRecipes(), which emits the fetched recipe data.
     this.recipeService.getRecipes(this.filter).subscribe(data =>{
     console.log(data)
     //maps the received data (data.results) to a new array (datarecipes).
     //Assigns the mapped recipes to the recipes property of the component.
     let datarecipes = data.results.map((recipe: { id: any; title: any; image: any; imageType: any; nutrition: any; }) => {
       return {
       id: recipe.id,
       title: recipe.title,
       image: recipe.image,
       imageType: recipe.imageType,
       nutrition: recipe.nutrition,
       }
     })
     this.recipes = datarecipes;
   })  
 }
  
}
