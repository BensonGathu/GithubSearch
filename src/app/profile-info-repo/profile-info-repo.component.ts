import { Component, OnInit,Input } from '@angular/core';
import { GitService } from '../git-service/git.service'
import { Repo } from '../repo';
import { User } from '../user';



@Component({
  selector: 'app-profile-info-repo',
  templateUrl: './profile-info-repo.component.html',
  styleUrls: ['./profile-info-repo.component.css']
})
export class ProfileInfoRepoComponent implements OnInit {
searchRepo = true

repo:any = [];
userName!:string;

  constructor(private gitRepoService:GitService, private gitUserService:GitService) { }
  search(userName:string){
    this.gitRepoService.repoRequest(userName).then((success)=>{
      this.repo = this.gitRepoService.repo 
    },
    error =>{
      alert("Repo error")
    })
  }

  ngOnInit() {
    this.search("bensongathu")
  }

}
