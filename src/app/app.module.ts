import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileInfoImageComponent } from './profile-info-image/profile-info-image.component';
import { ProfileInfoRepoComponent } from './profile-info-repo/profile-info-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProfileInfoComponent,
    ProfileInfoImageComponent,
    ProfileInfoRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
