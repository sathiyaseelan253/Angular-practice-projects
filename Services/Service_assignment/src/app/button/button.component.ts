import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Counter.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers:[CounterService]
})
export class ButtonComponent implements OnInit {
  viewCount:number=0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }
  onIncrementClick(){
    this.viewCount = this.counterService.onIncrementCount();
}
}
