import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RecipeinfoComponent } from './recipeinfo/recipeinfo.component';
import { Filter } from './Interfaces/filter';
import { RecipeService } from './services/recipe.service';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AsyncPipe } from '@angular/common';
//import { Recipeinfo } from './Interfaces/recipeinfo';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AsyncPipe, RouterOutlet, RegisterComponent, LoginComponent, RouterLinkActive, RouterLink, FormsModule, RecipeinfoComponent, HomeComponent]
})

export class AppComponent {

  filter: Filter ={
    query: "",
    mealtype: "",
    diet: "",
    intolerances: ""
  }

  //recipe: Recipeinfo= {
    //id: 1,
    //title: 'pasta',
    //nutrition: 'fat',
    //allergenes: 'egg',
    //image: 'test',
    //self: 'test'
  //}

  loggedIn$: Observable<boolean>; 

  //Name of the property, it holds an array of items, recipe data. Then initializes the recipes property with an empty array ([]). 
  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private auth: AuthService) {
    
    this.loggedIn$ = this.auth.loggedIn$;
   }

   onSubmit() {
    console.log(this.filter);
    //Passing filter criteria to the getRecipes() method of recipeService. Then makes an HTTP request to fetch recipes based on the provided filter.
     this.recipeService.getRecipes(this.filter).subscribe(data =>{ //subscribes to the observable returned by getRecipes() to handle the response data.
     console.log(data)
     //Maps over the results array of the response data (data.results). For each recipe in the results array,
     let datarecipes = data.results.map((recipe: { id: any; title: any; image: any; imageType: any; }) => { 
       return {
       id: recipe.id,
       title: recipe.title,
       image: recipe.image,
       imageType: recipe.imageType,
       }
     })
     this.recipes = datarecipes; //Assigns the datarecipes array to the recipes property of the component to update the list of recipes displayed.

   })  
 }

    logout() {
      this.auth.logOut();
    }

  }
  //Mockdata
  //recipes = { "results": [{ "id": 654959, "title": "Pasta With Tuna", "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 10.3185, "unit": "g" }] } }, { "id": 654857, "title": "Pasta On The Border", "image": "https://spoonacular.com/recipeImages/654857-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 19.8995, "unit": "g" }] } }, { "id": 654883, "title": "Pasta Vegetable Soup", "image": "https://spoonacular.com/recipeImages/654883-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 3.36382, "unit": "g" }] } }, { "id": 654926, "title": "Pasta With Gorgonzola Sauce", "image": "https://spoonacular.com/recipeImages/654926-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 24.5836, "unit": "g" }] } }, { "id": 654944, "title": "Pasta With Salmon Cream Sauce", "image": "https://spoonacular.com/recipeImages/654944-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 14.547, "unit": "g" }] } }, { "id": 654905, "title": "Pasta With Chickpeas and Kale", "image": "https://spoonacular.com/recipeImages/654905-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 7.46435, "unit": "g" }] } }, { "id": 654901, "title": "Pasta With Chicken and Broccoli", "image": "https://spoonacular.com/recipeImages/654901-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 24.1358, "unit": "g" }] } }, { "id": 654913, "title": "Pasta With Chicken and Mushrooms", "image": "https://spoonacular.com/recipeImages/654913-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 5.75386, "unit": "g" }] } }, { "id": 654835, "title": "Pasta e Fagioli (Pasta and Beans)", "image": "https://spoonacular.com/recipeImages/654835-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 6.35857, "unit": "g" }] } }, { "id": 654935, "title": "Pasta with Peas and Italian Sausage", "image": "https://spoonacular.com/recipeImages/654935-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 11.8876, "unit": "g" }] } }], "offset": 0, "number": 10, "totalResults": 133 }

