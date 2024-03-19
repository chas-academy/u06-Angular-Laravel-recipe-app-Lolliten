import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   
      { path: '', component: AppComponent } //is this right or should default be home?
      { path: 'home', component: HomeComponent }
      { path: 'register', component: RegisterComponent }
      { path: 'login', component: LoginComponent }
      ];