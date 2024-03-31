import { Component } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';
import { RecipeinfoComponent } from '../recipeinfo/recipeinfo.component';
import { RecipeService } from '../services/recipe.service';
import { Filter } from '../Interfaces/filter';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeinfoComponent],
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

  recipe: Recipeinfo= {
    id: 1,
    title: 'pasta',
    nutrition: 'fat',
    allergenes: 'egg',
    photo: 'test'
  }

   //Mock-data created from Spoonacular API

   recipes = { "results": [{ "id": 654959, "title": "Pasta With Tuna", "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 10.3185, "unit": "g" }] } }, { "id": 654857, "title": "Pasta On The Border", "image": "https://spoonacular.com/recipeImages/654857-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 19.8995, "unit": "g" }] } }, { "id": 654883, "title": "Pasta Vegetable Soup", "image": "https://spoonacular.com/recipeImages/654883-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 3.36382, "unit": "g" }] } }, { "id": 654926, "title": "Pasta With Gorgonzola Sauce", "image": "https://spoonacular.com/recipeImages/654926-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 24.5836, "unit": "g" }] } }, { "id": 654944, "title": "Pasta With Salmon Cream Sauce", "image": "https://spoonacular.com/recipeImages/654944-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 14.547, "unit": "g" }] } }, { "id": 654905, "title": "Pasta With Chickpeas and Kale", "image": "https://spoonacular.com/recipeImages/654905-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 7.46435, "unit": "g" }] } }, { "id": 654901, "title": "Pasta With Chicken and Broccoli", "image": "https://spoonacular.com/recipeImages/654901-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 24.1358, "unit": "g" }] } }, { "id": 654913, "title": "Pasta With Chicken and Mushrooms", "image": "https://spoonacular.com/recipeImages/654913-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 5.75386, "unit": "g" }] } }, { "id": 654835, "title": "Pasta e Fagioli (Pasta and Beans)", "image": "https://spoonacular.com/recipeImages/654835-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 6.35857, "unit": "g" }] } }, { "id": 654935, "title": "Pasta with Peas and Italian Sausage", "image": "https://spoonacular.com/recipeImages/654935-312x231.jpg", "imageType": "jpg", "nutrition": { "nutrients": [{ "name": "Fat", "amount": 11.8876, "unit": "g" }] } }], "offset": 0, "number": 10, "totalResults": 133 }

  onSubmit() {
    
    console.log('Form submitted');
  }

}

  //Delete this?
  /*recipes?: Recipe;

  searchterm = "chicken";

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipe(this.searchterm,).subscribe(result) =>
    console.log(result);
    let recipe: Recipe[];
    recipes = result.hits.map[item => {
      
    id: number;
    title: string;
    nutrition: string;
    allergenes: string;
    photo: string;
  }
    }]*/
  


 


