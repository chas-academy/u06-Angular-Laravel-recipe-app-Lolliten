import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../Interfaces/user';
import { LoginDetails } from '../Interfaces/logindetails';
import { Registerdetails } from '../Interfaces/registerdetails';
import { Router } from '@angular/router'; //?


/*interface ResultData {
  token: string
}*/

//Do I need this? Login dont have the interface?
/*interface RegisterDetails {
  name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}*/

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); //Initializes the variable with a new instance of BehaviorSubject, that is a type of Observable provided by RxJS. 
  loggedIn$ = this.loggedIn.asObservable(); //It has a value it emits its to new subscribers. 

  private baseUrl = 'https://u06-angular-laravel-recipe-app-lolliten.onrender.com/api/';

  private httpOptions = { //A variable name used to store the options for an HTTP request.
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient, private router: Router) { }

    //When called for it returns the current login status stored in the loggedIn BehaviorSubject.
  getLoginStatus(){
    //Returns the current login status of the user. It retrieves the value from the loggedIn BehaviorSubject using the value property.
    return this.loggedIn.value;
  }
  
  private updateLoginState(loginState: boolean) {
    //Calls the next() method on the loggedIn BehaviorSubject and passes the loginState parameter to update its value.
    this.loggedIn.next(loginState);
  }

  loginUser(loginDetails: LoginDetails){
    //makes an HTTP POST request to the specified URL (this.baseUrl + 'login') with the provided loginDetails data as the request body.
    this.http.post<any>(this.baseUrl+'login', loginDetails, this.httpOptions).pipe( //Pipi allows to chain RxJS operators to operate on the observable stream returned by the post method.

      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        //subscribes to the observable returned by the post method. When the HTTP request is successful, it logs the result to the console. 
        //The result variable holds the response data returned by the server.
        
        this.updateLoginState(true); //Updates application's state that user is logged in.
        //Updates the Authorization header in the httpOptions object and sets the Authorization header to contain a token from the result object. 
        //The token is prefixed with "Bearer "
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + result.token);
        this.router.navigate(['/']) //Navigates user to the specified route, which is the root route 
      })
  }

  register(form: any) {
    //Sends an HTTP POST request to the specified URL
    this.http.post<any>(this.baseUrl + 'register', form, this.httpOptions).pipe( //Uses the pipe operator to chain RxJS operators, the catchError.
      catchError(this.handleError)
      //Subscribes to the observable returned by the post method. When the HTTP request is successful, it receives the response data (result) from the server.
    ).subscribe(res => {
      console.log(res); //Log the response data. 
      console.log(res.token); //Logs the response data and the token.
      this.updateLoginState(true)
      //Updates the Authorization header in the httpOptions object with the authentication token received in the response (res.token).
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + res.token);
      
      this.router.navigate(['/']); //Navigates user to the specified route, which is the root route 
    });
  }

  logOut(){
    this.http.post<any>(this.baseUrl+'logout', {}, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result); //Logs the response data to the console for debugging purposes.
        this.updateLoginState(false);
        //removes the Authorization header from the httpOptions object
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
      })
  }
    //Returns an observable of type Observable<User[]>.
    //Whoever calls this function can subscribe to the returned observable to receive a stream of User[] data.
  getUser2(): Observable<User[]> { 
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer "); //Sets the Authorization header in the httpOptions object to an empty string or space.
    return this.http.get<User[]>(this.baseUrl+'getuser/2', this.httpOptions); //Fetch user data for the user with ID 2
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 404) {
     
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something happened, try again later.'));
  }

}
