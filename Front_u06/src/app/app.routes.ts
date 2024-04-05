import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecificrecipeComponent } from './specificrecipe/specificrecipe.component';
//import { RecipeinfoComponent } from './recipeinfo/recipeinfo.component';
//import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
   
      { path: "", component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path:'recipe/:id', component: SpecificrecipeComponent},
     
       // { path: '**', redirectTo: '' }, //redirects unknown routes to main
      //{ path: 'recipeinfo', component: RecipeinfoComponent}, //is this right??
      ];