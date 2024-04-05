import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter',
  standalone: true
})
export class FormatterPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.replace("https://api.spoonacular.com/recipes/","").split("?")[0];
  }

}
