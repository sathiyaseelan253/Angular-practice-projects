import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { map} from 'rxjs/operators'
import { Post } from '../Post.model';
import { PostService } from '../Post.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-back-end-app',
  templateUrl: './back-end-app.component.html',
  styleUrls: ['./back-end-app.component.css']
})
export class BackEndAppComponent implements OnInit{

  isFetching : boolean = false;
  loadedPosts : Post[] = [];
  /**
   *
   */
  constructor(private http:HttpClient, private postService : PostService) {
  }
  ngOnInit(): void {
    this.onFetchPosts();
  }
  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.savePostToDB(postData)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchAllPosts()
    .subscribe((posts)=>{
      this.isFetching = false;
      this.loadedPosts = posts;
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.DeletePosts().subscribe(()=>{
      this.loadedPosts = [];
    })
  }
  ageRangeValidator(min:number,max:number): ValidatorFn {
    return (control:AbstractControl):{[key:string]:boolean}|null =>{
        if(control.value != undefined && (control.value<min || control.value > max)){
            return {"ageRange":true};
        }
        return null
    }
}
}
