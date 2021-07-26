import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { User } from '../user';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css'],
  providers: [UserRequestApiService]
})
export class SearchReposComponent implements OnInit {
  user: User;
  repos:any[];
  searchTerm:string;

  constructor(private searchApi:UserRequestApiService) { }

  findRepos (){
    this.searchApi.updateSearchTerm(this.searchTerm);
    this.searchApi.searchRepos();
    this.repos = this.searchApi.reposArray;
  }

  ngOnInit(): void {
  }

}
