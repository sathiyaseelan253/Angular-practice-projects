import { AbstractControl, ValidatorFn } from "@angular/forms";

export class AgeValidator{
    ageRangeValidator(min:number,max:number): ValidatorFn {
        return (control:AbstractControl):{[key:string]:boolean}|null =>{
            if(control.value != undefined && (control.value<min || control.value > max)){
                return {"ageRange":true};
            }
            return null
        }
    }
}