import { Component } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';
import { RecipeinfoComponent } from '../recipeinfo/recipeinfo.component';
import { RecipeService } from '../services/recipe.service';
import { Filter } from '../Interfaces/filter';
import { FormsModule } from '@angular/forms';
import { SpecificrecipeComponent } from '../specificrecipe/specificrecipe.component';
import { RouterLink } from '@angular/router';
import { FormatterPipe } from '../Pipes/formatter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeinfoComponent, FormsModule, SpecificrecipeComponent, RouterLink, FormatterPipe],
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
