import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    SearchReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
