import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./Post.model";
import { map } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class PostService{
    constructor(private http:HttpClient){}
    fetchAllPosts(){
        return this.http
    .get<{[key:string]:Post}>('https://angular-d2809-default-rtdb.firebaseio.com/post.json')
    .pipe(
      map(responseData =>{
      let postArray : Post[]=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({ ...responseData[key],id:key});
        }
      }
      return postArray;
    }));
    
    }
    savePostToDB(newPost:Post){
        this.http.post('https://angular-d2809-default-rtdb.firebaseio.com/post.json',newPost)
        .subscribe((response)=>{
          console.log("Data from Firebase:",response);
        })
    }
    DeletePosts(){
        return this.http.delete('https://angular-d2809-default-rtdb.firebaseio.com/post.json')
    }
}