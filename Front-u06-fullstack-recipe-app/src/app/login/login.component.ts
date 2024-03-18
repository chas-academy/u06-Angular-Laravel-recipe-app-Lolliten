import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })

  export class LoginComponent {

    handleLogin() {
        // Handle login logic here
        console.log('Login button clicked');
      }
  }