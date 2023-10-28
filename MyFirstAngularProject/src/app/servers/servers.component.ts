import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverStatus : string = 'offline';
  date:any=new Date("05/26/2023");
  servers : string[]=['Unknown','Online','Offline'];
  constructor(){
    this.serverStatus = (Math.random() >0.5)?'online':'offline';
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
