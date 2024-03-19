import { Component } from '@angular/core';
import { Recipeinfo } from '../recipeinfo';
import { RecipeinfoComponent } from '../recipeinfo/recipeinfo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeinfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  recipe: Recipeinfo= {
    id: 1,
    title: 'pasta',
    nutrition: 'fat',
    allergenes: 'egg',
    photo: 'test'
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
    console.log('Form submitted');
  }
  
}

 


