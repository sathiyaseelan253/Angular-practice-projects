import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
  day:string = 'Thursday'
  btnStatus :boolean = false;
  serverCreatedStatus : string = "No server created";
  newServer : string = ''
  constructor(){
    setTimeout(() => {
      this.btnStatus = true;
    }, 2000);
  }
  OnServerCreated(){
    this.serverCreatedStatus = "New server created and it's name is "+ this.newServer;
  }
}
