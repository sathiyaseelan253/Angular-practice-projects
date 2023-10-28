import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  Username:string = "";
  usernameStatus = false;
  AvailableUsernames : string[] =[];
  ClearUsername(){
    this.Username = '';
  }
  OnUsernameCreated(){
    this.usernameStatus = true;
    this.AvailableUsernames.push(this.Username);
  }
}
