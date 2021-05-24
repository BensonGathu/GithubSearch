import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service'
import { Router } from '@angular/router'
import { User} from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
searchUsers = true;
  user!:User;
  repo: any =[]; 
  userName!:string;
  constructor(private gitUserService:GitService,private gitRepoService:GitService, private router:Router) { }
  
  search(userName:any){
    this.gitUserService.userRequest(userName).then((success)=>{
      this.user = this.gitUserService.user
    },
    error=>{
      alert("He who can't be found")
    })

    this.gitRepoService.repoRequest(userName).then((results)=>{
      this.repo = this.gitRepoService.repo
    },
    error =>{
      alert("Repo not found")
    })
  }
  ngOnInit(){
    this.search("bensongathu")
  }

}
