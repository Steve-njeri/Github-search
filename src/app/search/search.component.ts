import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [UserRequestApiService],
})
export class SearchComponent implements OnInit {
  repos: any[];
  user: User;
    
  constructor(private userRequestService:UserRequestApiService) { 
    this.userRequestService.getMyUser();
    this.user = this.userRequestService.user;

    this.userRequestService.getMyRepos();
    this.repos = this.userRequestService.reposArray;
  }

  ngOnInit(): void {
  }

}
