import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = https://api.spoonacular.com/recipes/complexSearch
  private app_key =
  private app_id =

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http:HttpClient) { }

  getRecipe(searchterm: string): Observable<any[]> {
    let cuisineType = "Amercian";
    let mealType = "Dinner";    
    let url = this.baseUrl + "&q=" + searchterm "&app_id=" + this.app_id + "&app_key=" this.app_key +  "med mera";
    return this.http.get<any[]>(this.baseUrl, this.httpOptions);
  }
}
