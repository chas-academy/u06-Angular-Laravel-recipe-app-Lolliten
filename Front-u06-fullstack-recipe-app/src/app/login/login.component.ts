import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })

  export class LoginComponent {

    onSubmit(event: Event) {
      event.preventDefault(); // Prevent the default form submission behavior
      // Handle form submission logic here
      console.log('Form submitted'); //to see if it works
  }
}