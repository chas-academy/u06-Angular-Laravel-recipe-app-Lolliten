import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private baseUrl = 'http://127.0.0.1/api/';

 private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  //Do I need to create Interface user-details?
//loginUser(LoginDetails: LoginDetails)?? om skapat interface
  loginUser(login: LoginComponent) {
    //<any> could be changed to token type later
    this.http.post<any>(this.baseUrl+'login', login, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        localStorage.setItem("token", result.token);
      })
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 404) {

      console.error('Error', error.error);
    } else {
      console.error('Backend returned code ${error.status}, body was: ', error.error);
    }
    return throwError(() => new Error('Error, please try again!'));
  }

}
