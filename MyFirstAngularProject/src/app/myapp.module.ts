import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { ServersComponent } from './servers/servers.component';
import { DatePipePipe } from './date-pipe.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { DatabindingComponent } from './databinding/databinding.component';
// import { ServersComponent } from './servers/servers.component';
// import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    // SuccessAlertComponent,
    // DatabindingComponent,
    ServersComponent,
    // DirectivesAssignmentComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    DatePipePipe,
    ReversePipe,
    SortPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MyAppModule { }
