import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filter } from '../Interfaces/filter';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private baseUrl = "https://api.spoonacular.com/recipes/complexSearch"
  private baseUrl2 = "https://api.spoonacular.com/recipes/" //for the specificrecipe
  private app_key = "943aa41b59554c0fbd87e17126a3fe82" 


  private httpOptions = { //A variable name used to store the options for an HTTP request.
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { } //This service can now make HTTP requests via `this.http`.

  //GetrecipebyID
  /*This line defines a public method named that takes parameter id. 
  The return type of this method is an Observable that emits values of type any.*/
  public getRecipeId(id: string): Observable<any> { 
    let url = `${this.baseUrl2}${id}/information?apiKey=${this.app_key}`; //Constructs the URL for the HTTP request. It's using string interpolation
    return this.http.get<any>(url, this.httpOptions); //Sends HTTP request to the URL using HttpClient service, it returns an Observable that will emit the HTTP response.
    //this.http.get(this.baseUrl + "?number=1&apiKey=" + this.app_key, this.httpOptions)// ??
  } 


public getRecipes(filter: Filter): Observable<any> { /*This line defines a public method named that takes parameter id. 
                                                        The return type of this method is an Observable that emits values of type any.*/
console.log(filter)
let url = this.baseUrl + "?apiKey=" + this.app_key + "&number=5";
if(filter.query) {
  url += "&query=" + filter.query;
}
if(filter.mealtype) {
  url += "&type=" + filter.mealtype;
}
if(filter.diet) {
  url += "&diet=" + filter.diet;
}
if(filter.intolerances) {
  url += "&intolerances=" + filter.intolerances;
}
url = encodeURI(url);

return this.http.get(url, this.httpOptions)
  
  }

}



