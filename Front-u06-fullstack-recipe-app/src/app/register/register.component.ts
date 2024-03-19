import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
  })

export class RegisterComponent {
  email: string = "";
  password: string = "";
  name: string = "";
  passwordConfirmation: string = "";
  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
  }
}

