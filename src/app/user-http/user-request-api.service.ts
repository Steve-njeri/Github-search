import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class UserRequestApiService {

  public userName: string;
  private endpoint: string = "/users/";
  public searchTerm: string = "calculator";
  public user: User;
  public repository: Repository;
  public reposArray: any = [];

  apiUrl:"https://api.github.com"
  clientId:"abeb90549ecafe81772b"
  clientSecret: "045cee6191464590b656b150087fd37724d5454c"

  constructor(private http:Http) { 
    this.userName = "Steve-njeri";
    this.user= new User("","","","","");
    this.repository=  new Repository("","","");
  }

  getMyUser (){
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get("https://api.github.com" + this.endpoint + "Steve-njeri" + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(
        res => {
          this.user.user = res.json().name;
          this.user.login = res.json().login;
          this.user.bio = res.json().bio;
          this.user.html_url = res.json().html_url;
          this.user.avatar_url = res.json().avatar_url;

          resolve();
        },
        error => {
          reject(error);
        });
    });
    return promise;
  }

  getUser() {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get("https://api.github.com" + this.endpoint + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(
        res => {
          this.user.user = res.json().name;
          this.user.login = res.json().login;
          this.user.bio = res.json().bio;
          this.user.html_url = res.json().html_url;
          this.user.avatar_url = res.json().avatar_url;

          resolve();
        },
        error => {
          reject(error);
        });
    });
    return promise;
  }

  getMyRepos() {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get("https://api.github.com" + this.endpoint + "Steve-njeri" + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(
        res => {
          for (let repo of res.json()){
            this.repository.name = repo.name;
            this.repository.description = repo.description;
            this.repository.html_url = repo.html_url;
            this.reposArray.push(this.repository);
            this.repository=  new Repository("","","");

            resolve();
          }
        },
        error => {
          reject(error);
        });
    });
    return promise;
  }

  getRepos() {
    this.reposArray = [];
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get("https://api.github.com" + this.endpoint + this.userName + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(
        res => {
          for (let repo of res.json()){
            this.repository.name = repo.name;
            this.repository.description = repo.description;
            this.repository.html_url= repo.html_url;
            this.reposArray.push(this.repository);
            this.repository=  new Repository("","","");

            resolve();
          }
        },
        error => {
          reject(error);
        });
    });
    return promise;
  }

  searchRepos() {
    this.reposArray = [];
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get("https://api.github.com" + "/search/repositories?q=" + this.searchTerm + "in:name").toPromise().then(
        res => {
          for (let repo of res.json().items){
            this.repository.name = repo.name;
            this.repository.description = repo.description;
            this.repository.html_url = repo.html_url;
            this.reposArray.push(this.repository);
            this.repository=  new Repository("","","");

            resolve();
          }
        },
        error => {
          reject(error);
        });
    });
  }

  updateSearchTerm(searchTerm:string) {
    this.searchTerm = searchTerm;
  }

  updateProfile(username:string) {
    this.userName = username;
  }
}
