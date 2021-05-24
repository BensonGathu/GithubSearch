import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInfoRepoComponent } from './profile-info-repo/profile-info-repo.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

const routes: Routes = [
  {path:"repos",component:ProfileInfoRepoComponent},
  {path:"user",component:ProfileInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
