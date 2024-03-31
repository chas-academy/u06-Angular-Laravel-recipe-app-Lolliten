import { Component, Input } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';

@Component({
  selector: 'app-recipeinfo',
  standalone: true,
  imports: [],
  templateUrl: './recipeinfo.component.html',
  styleUrl: './recipeinfo.component.scss'
})
export class RecipeinfoComponent {

  @Input() recipe: Recipeinfo={
    id: -1,
    title: "",
    nutrition: "",
    allergenes: "",
    photo: ""
  };
}
