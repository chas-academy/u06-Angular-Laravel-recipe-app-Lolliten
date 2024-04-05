import { Component } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';
import { RecipeinfoComponent } from '../recipeinfo/recipeinfo.component';
import { RecipeService } from '../services/recipe.service';
import { Filter } from '../Interfaces/filter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeinfoComponent, FormsModule],
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

  recipes: Recipeinfo[]; 

  //Delete this?
  //recipes?: Recipe;

  searchterm = "chicken";

  constructor(private recipeService: RecipeService) { 
    this.recipes = [
      {
        id: -1,
        title: "",
        image: "",
        //nutrition: 
      }
    ]
  }

  onSubmit() {
    console.log(this.filter);
     this.recipeService.getRecipes(this.filter).subscribe(data =>{
     console.log(data)
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
