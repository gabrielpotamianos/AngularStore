import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  prepositions = "of the in ";

  transform(value: string): any {
    if(!value)
      return null;
    
    let words = value.split(' ');
    for(var i=0; i<words.length; i++){
      if(!this.prepositions.includes(words[i])){
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
      }
      else {
        words[i] = words[i].toLowerCase();
      }
    }
    
    return words.join(' ');

  }

}
