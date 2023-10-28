import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { TestAgeValidator, TestAgeValidatorFn } from './back-end-app/AgeValidator';

@Directive({
  selector: '[appAgeRangeValidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting : AgeRangeValidatorDirective,
      multi:true
    }
  ]
})
export class AgeRangeValidatorDirective implements Validator {

  min:number = 25;
  max:number = 50;
  @Input('appAgeRangeValidator') forbiddenName = '';

  constructor() { 
  }
  validate(control:AbstractControl):ValidationErrors | null{
    // let validatorFn = this.validator(control);
    // return validatorFn;
    //return TestAgeValidatorFn(control);
    console.log(this.forbiddenName);
    return this.forbiddenName ? TestAgeValidatorFn(new RegExp(this.forbiddenName, 'i'))(control)
    : null;
  }
}

function AgeValidatorFn(min:number,max:number) : ValidatorFn{

    return (control: AbstractControl): ValidationErrors | null => {
 
        let age: number = +control.value;
     
        if(age < min || age > max){
            return {'ageError':true};
          }
          return null;
          
        
      }
}

