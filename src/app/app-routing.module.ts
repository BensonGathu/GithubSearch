import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInfoRepoComponent } from './profile-info-repo/profile-info-repo.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:"repos",component:ProfileInfoRepoComponent},
  {path:"user",component:ProfileInfoComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
