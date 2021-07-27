import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path:"home",component:SearchComponent},
    {path:"search-user",component:SearchUserComponent},
    {path:"search-repos",component:SearchReposComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    // {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
