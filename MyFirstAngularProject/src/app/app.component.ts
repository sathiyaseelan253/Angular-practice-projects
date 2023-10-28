import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularProject';
  firedNumbers : number[] = [];
  OddNumbers : number[] =[];
  EvenNumbers : number[] =[];

  SaveNumbers(firedNumber : number){
    console.log("Incrementing number:"+firedNumber);
    if(firedNumber % 2 === 0){
      this.EvenNumbers.push(firedNumber);
    }
    else{
      this.OddNumbers.push(firedNumber);
    }
  }
}
