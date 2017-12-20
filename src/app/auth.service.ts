import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  isLoggedIn = false;
  user: User = new User;

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    return this.http.post<User>(
      // 'http://localhost:4200/api/user/login',
      'api/user/login',
      user,
      httpOptions
    ).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((user: User) => {
        this.isLoggedIn = true;
        this.user = user;
      })
    )
    .toPromise();
  }

  logout() {
    // https://stackoverflow.com/a/46816238
    return this.http.post('api/user/logout', {}, httpOptions).pipe(
      tap(res => {
        this.isLoggedIn = false;
        this.user = new User();
      })
    ).toPromise();
  }

  register(user: User) {
    return this.http.post<User>(
      // 'http://localhost:4200/api/user/login',
      'api/user/register',
      user,
      httpOptions
    ).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((user: User) => {
        this.isLoggedIn = true;
        this.user = user;
      })
    )
    .toPromise();
  }

}
