import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filter } from '../Interfaces/filter';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = "https://api.spoonacular.com/recipes/complexSearch"
  private app_key = "943aa41b59554c0fbd87e17126a3fe82"


  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { 
//This service can now make HTTP requests via `this.http`.
  }

  public getRecipe() {
    this.http.get(this.baseUrl + "?number=1&apiKey=" + this.app_key, this.httpOptions)
  }

  public getRecipes(filter: Filter) {
console.log(filter)
let url = this.baseUrl + "?apiKey=" + this.app_key + "&number=5";
if(filter.query) {
  console.log("query is working")
  url += "&query=" + filter.query;
}
if(filter.mealtype) {
  console.log("mealtype is working")
  url += "&type=" + filter.mealtype;
}
if(filter.diet) {
  console.log("diet is working")
  url += "&diet=" + filter.diet;
}
if(filter.intolerances) {
  console.log("intolerances is working")
  url += "&intolerances=" + filter.intolerances;
}
url = encodeURI(url);

//this.http.get()

  }

}


