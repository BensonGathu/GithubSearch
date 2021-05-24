import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../user';
import {Repo} from '../repo';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  user:User;
  repo: Repo;
  accesstoken :string = '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'

  constructor(private http:HttpClient) {
    this.user = new User("","","","","","",0,0,0,new Date());
    this.repo = new Repo("","","",new Date(),"",0);
    }

    //gets typed username information
    
    userRequest(userName:string){
      interface ApiResponse{
        login:string;
        avatar_url:string;
        location:string;
        html_url:string;
        name:string;
        email:string;
        public_repos:number;
        followers:number;
        following:number;
        created_at:Date

      }
      let promise = new Promise<void>((resolve,reject) => {
        this.http.get<ApiResponse>('https://api.github.com/users/'+ userName+ '?access_token='+this.accesstoken).toPromise().then((response)=>{
          this.user = response;
          console.log(this.user)
          resolve()
        },
        error=>{
          alert("Problem detected")
          reject()
        })
      })
      return promise
    }

    //get repo data
    repoRequest(userName:any){
      interface ApiResponse{
        name:string;
        description:string;
        html_url:string;
        created_at:Date;
        language:string;
        forks:number
      }
      let promise = new Promise<void>((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/'+userName+'/repos?access_token='+this.accesstoken).toPromise().then((response)=>{
          this.repo = response
          
          console.log(this.repo)
          resolve()
        },
        error=>{
          alert("Cant be repossessed")
          reject(error)
        })
      })
      return promise
    }
  
  // //for the profile
  // getProfile(searchName: any):Observable<any>{
  //   let data = `https://api.github.com/users/${searchName}?${this.accesskey}`
  //   return this.httpClient.get<any>(data)
  
  // }

  // getRepos(searchName: any){
  //   let data = `https://api.github.com/users/${searchName}/repos?${this.accesskey}`
  //   return this.httpClient.get<any[]>(data)
  // }
}
