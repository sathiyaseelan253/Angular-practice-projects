import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[]): string[] {
    if(value.length>0){
      return value.sort((a,b)=>{
        if(a > b){
          return 1;
        }
        else{
          return -1;
        }
      })
    }
    return [];
  }

}
