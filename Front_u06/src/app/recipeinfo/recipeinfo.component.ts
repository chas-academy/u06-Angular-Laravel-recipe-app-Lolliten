import { Component, Input } from '@angular/core';
import { Recipeinfo } from '../Interfaces/recipeinfo';
import { RouterLink } from '@angular/router';
import { SpecificrecipeComponent } from '../specificrecipe/specificrecipe.component';
//import { FormatterPipe } from '../Pipes/formatter.pipe';


@Component({
  selector: 'app-recipeinfo',
  standalone: true,
  imports: [RouterLink, SpecificrecipeComponent],
  templateUrl: './recipeinfo.component.html',
  styleUrl: './recipeinfo.component.scss'
})
export class RecipeinfoComponent {

  @Input() recipe: Recipeinfo={
    id: 0,
    title: "",
    image: "",
    //self: ""
  };

  /* */

}
