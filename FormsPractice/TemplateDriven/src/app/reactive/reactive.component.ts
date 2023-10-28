import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{
  userInputForm: FormGroup = new FormGroup({});
  statuses : string[] =['Stable','Critical','Finished'];
  retrictedProjectName : string ='TestProject';
  ngOnInit(): void {
    this.userInputForm =new FormGroup({
      'ProjectName':new FormControl(null, [Validators.required,this.checkForbiddenProjectName.bind(this)]),
      'Mail':new FormControl(null,[Validators.required,Validators.email]),
      'Status':new FormControl('stable'),
    });
  };
  onUserFormSubmit(){
    console.log(this.userInputForm);
  }
  checkForbiddenProjectName(control:FormControl) : {[key:string]:boolean} | null{
    if(control.value == this.retrictedProjectName){
      return { 'forBiddenProjectName':true};
    }
    return null;
  }
  checkForbiddenProjectNameAsyn(control:FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
        if(control.value == this.retrictedProjectName){
          resolve({'forBiddenProjectName':true})
        }
        else
          resolve (null);
      }, 2000);
    });
    return promise;
   
  }
}
