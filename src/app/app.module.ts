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

const routes: Routes = [
  {path:"home",component:SearchUserComponent},
  // {path:"search-user",component:SearchComponent},
  // {path:"search-repos",component:SearchReposComponent},
  // {path:"",redirectTo:"/home",pathMatch:"full"},
  // {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    SearchReposComponent,
    SearchUserComponent,
    NotFoundComponent
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
