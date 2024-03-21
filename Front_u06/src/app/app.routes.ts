import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecipeinfoComponent } from './recipeinfo/recipeinfo.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
   
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {path: 'profile', component: ProfileComponent, canActivate: [authGuard]}
      //{ path: 'recipeinfo', component: RecipeinfoComponent}, //is this right??
      //{ path: '**', component: NotFoundComponent, data: { title: 'Not found...' } },
      ];