import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent {
  ToggleButtonState :boolean = false;
  ButtonClickArray : string[] = [];
  OnSetParaVisibility(){
    this.ToggleButtonState = !this.ToggleButtonState;
    this.ButtonClickArray.push(new Date().toLocaleString());
  }

}
