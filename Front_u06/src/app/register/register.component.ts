import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registerdetails } from '../Interfaces/registerdetails';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })

export class RegisterComponent {
  email: string = "";
  password: string = "";
  name: string = "";
  passwordConfirmation: string = "";
  //constructor(private http: HttpClient, private router: Router) { }

  registerdetails: Registerdetails ={
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }

  onSubmit() {
    //Add what happens on submit, use ngModel too
  }
}

//HTTP request for ngModel

