import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    this.http.get(this.baseUrl + "?number=1&app_key=" + this.app_key, this.httpOptions)
  }

}


