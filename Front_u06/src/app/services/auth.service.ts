import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../Interfaces/user';
import { LoginDetails } from '../Interfaces/logindetails';
import { Registerdetails } from '../Interfaces/registerdetails';
import { Router } from '@angular/router'; //?

//TAKE THIS AWAY??
interface ResultData {
  token: string
}

//Do I need this? Login dont have the interface?
interface RegisterDetails {
  name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

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

  getLoginStatus(){
    return this.loggedIn.value;
  }
  private updateLoginState(loginState: boolean) {
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
    this.http.post<any>(this.baseUrl + 'register', form, this.httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe(res => {
      console.log(res);
      console.log(res.token);
      this.updateLoginState(true)
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + res.token); // + result.token //should this line be here?
      
      this.router.navigate(['/']);
    });
  }

  logOut(){
    this.http.post<any>(this.baseUrl+'logout', {}, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        this.updateLoginState(false);
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization'); //
      })
  }
  //connect button to log out 
  //create new button for logout 
  //manipulate login to be logout when logged in

  getUser2(): Observable<User[]> {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer "); // + token??
    return this.http.get<User[]>(this.baseUrl+'getuser/2', this.httpOptions);
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
