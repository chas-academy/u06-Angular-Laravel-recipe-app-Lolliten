import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginDetails } from '../Interfaces/logindetails';
import { User } from '../Interfaces/user';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })

  export class LoginComponent {

    loginDetails: LoginDetails;

    user: User;

    loggedIn$: Observable<boolean>;

    constructor(private auth: AuthService) { 
      this.loginDetails = {
        email: "seb@seb.seb",
        password: "sebsebseb"
      }

      this.user = {
        id:-1,
        name:"",
        email:""
      }

      this.loggedIn$ = this.auth.loggedIn$;
    }
  
    login(){
      this.auth.loginUser(this.loginDetails);
    }
    logout(){
      this.auth.logOut();
    }
  
    getUser(){
      this.auth.getUser2().subscribe(res => {
        console.log(res[0]);
        this.user = res[0];
      })
    }

    onSubmit(event: Event) {
      event.preventDefault(); // Prevent the default form submission behavior
      // Handle form submission logic here
      console.log('Form submitted'); //to see if it works
  }
}