import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registerdetails } from '../Interfaces/registerdetails';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })

export class RegisterComponent {

  //Neccessary ??

  /*email: string = "";
  password: string = "";
  name: string = "";
  passwordConfirmation: string = "";*/ 

  //This instead?? and the constructor under?
  registerdetails: Registerdetails ={
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }

   constructor(private auth: AuthService) {
    this.registerdetails = {
      name:"",
      email:"", 
      password:"", 
      passwordConfirmation:"",
      }
    }

   /*register(){
      this.auth.register(this.form.value)
    }*/

  onSubmit() {
    //Add what happens on submit, use ngModel too
  }
}

//HTTP request for ngModel

