import { Component } from "@angular/core";
import { CounterService } from "../Counter.service";

@Component({
    selector:'app-label',
    templateUrl:'./label.component.html',
    styleUrls:['./label.component.css'],
    providers:[CounterService]
})
export class LabelComponent{
    viewCount:number=0;
    constructor(private counterService:CounterService) {
    }
    onIncrementClick(){
       this.viewCount = this.counterService.onIncrementCount();
    }
}