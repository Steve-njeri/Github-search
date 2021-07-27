import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UserRequestApiService } from './user-http/user-request-api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BoldenPipe } from './bolden.pipe';
import { ChangecolorDirective } from './changecolor.directive';

const routes: Routes = [
  {path:"home",component:SearchComponent},
  {path:"search-user",component:SearchUserComponent},
  {path:"search-repos",component:SearchReposComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    SearchReposComponent,
    SearchUserComponent,
    NotFoundComponent,
    BoldenPipe,
    ChangecolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [UserRequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
