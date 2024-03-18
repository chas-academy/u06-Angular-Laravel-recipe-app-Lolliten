import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
    console.log('Form submitted');
  }
  
}

 


