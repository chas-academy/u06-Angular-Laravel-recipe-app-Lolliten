import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filter } from '../Interfaces/filter';
import { Observable } from 'rxjs'; //??

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private baseUrl = "https://api.spoonacular.com/recipes/complexSearch"
  private app_key = "943aa41b59554c0fbd87e17126a3fe82"


  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      //'Accept-Language': 'en' //Ta bort??
    })
  }

  constructor(private http: HttpClient) { 
//This service can now make HTTP requests via `this.http`.
  }

  //getrecipebyID
  public getRecipe() { //(query: string, mealtype: string, diet: string, allergenes: string): Observable<any> {...
    this.http.get(this.baseUrl + "?number=1&apiKey=" + this.app_key, this.httpOptions)
  }

  public getRecipes(filter: Filter): Observable<any> {
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

return this.http.get(url, this.httpOptions)
  
  }

}

/*
// Sök efter ID för visa enskilt recept ??

getRecipesInfo(id: string): Observable<any> {
  let url = `${this.baseUrl2}/${id}/information?apiKey=${this.app_key}`
  return this.http.get<any>(url, this.httpOptions);
  
}
*/


