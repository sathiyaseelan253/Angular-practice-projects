import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const TestAgeValidator : ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    let age: number = +control.value;
  
      if(age < 25 || age > 50){
        return {'ageError':true};
      }
      return null;
  }

  export function TestAgeValidatorFn(nameRe: RegExp) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null;
      };
  }
