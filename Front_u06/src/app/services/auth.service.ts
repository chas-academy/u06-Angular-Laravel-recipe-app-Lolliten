import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  // Get user information from the server
  getUser(): Observable<any> {
    // Assuming you have an endpoint for retrieving user information
    return this.http.get<any>(`${this.baseUrl}/user`)
      .pipe(
        catchError(error => {
          // Handle errors gracefully, e.g., log or display an error message
          console.error('Error fetching user information:', error);
          throw error; // Rethrow the error to propagate it to the caller
        })
      );
  }
}


