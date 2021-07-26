import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { User } from '../user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers: [UserRequestApiService],
})
export class SearchUserComponent implements OnInit {
  repos: any[];
  username: string;
  user: User;

  constructor(private userRequestService:UserRequestApiService) { }

  findUser(){
    this.userRequestService.updateProfile(this.username);
    this.userRequestService.getUser();
    this.user = this.userRequestService.user;

    this.userRequestService.getRepos();
    this.repos = this.userRequestService.reposArray;
  }

  ngOnInit(): void {
  }

}
