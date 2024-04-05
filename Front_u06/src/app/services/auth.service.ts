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

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  private baseUrl = 'https://u06-angular-laravel-recipe-app-lolliten.onrender.com//api/';

  private httpOptions = {
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

  //where is resultdata? Do i need to create IF?
  loginUser(loginDetails: LoginDetails){
    this.http.post<any>(this.baseUrl+'login', loginDetails, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        
        this.updateLoginState(true);
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + result.token);
        this.router.navigate(['/'])
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
