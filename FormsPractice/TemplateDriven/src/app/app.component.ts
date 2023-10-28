import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDriven';
  @ViewChild('form') submittedForm : any
  defaultSubscription:string="Advanced";

  onFormSubmit(){
    console.log(this.submittedForm);
  }
}
