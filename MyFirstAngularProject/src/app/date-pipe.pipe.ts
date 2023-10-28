import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe} from '@angular/common';
@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any): any {
    if(value){
    const dateValue = new Date(value);
    const day = dateValue.getDate().toString().padStart(2,'0');
    const month = dateValue.getMonth().toString().padStart(2,'0');
    const year = dateValue.getFullYear();
    return `${day}/${month}/${year}`;
    // const datePipe = new DatePipe('en-US')
    // return datePipe.transform(value,'dd-MM-yyyy');
    }
    return '';
  }

}
