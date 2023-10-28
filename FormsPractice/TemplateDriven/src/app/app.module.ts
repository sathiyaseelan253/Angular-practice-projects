import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { BackEndAppComponent } from './back-end-app/back-end-app.component';
import { AgeRangeValidatorDirective } from './age-range-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    BackEndAppComponent,
    AgeRangeValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
