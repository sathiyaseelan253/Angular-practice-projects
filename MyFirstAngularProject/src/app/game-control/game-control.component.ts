import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() PassNumbers : EventEmitter<any> = new EventEmitter();
  @Output() EmitShowNumbers = new EventEmitter();
  @Input() allFiredNumbers =[];
  OddNumbers : number[] =[];
  EvenNumbers : number[] =[];
  myInterval:any;

  startCount : number = 0;
  OnStartGame(){
    this.myInterval = setInterval(()=>{
      this.PassNumbers.emit(this.startCount+1);
      this.startCount++;
    },1000);
  }
  OnClearGameClicked(){
    clearInterval(this.myInterval);
  }
}
