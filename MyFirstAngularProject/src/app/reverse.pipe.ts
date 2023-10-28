import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let array :string[] =[];
    if(value != null){
      return value.split('').reverse().join('');
    }
    return '';
  }

}
