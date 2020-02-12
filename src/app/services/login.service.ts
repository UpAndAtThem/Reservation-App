import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;
  token: string;
  userUpdated: Subject<any>;

  constructor(
    public router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  setToken(token) {
    this.token = token;
  }

  // setUser(user) {
  //   // console.log(user);
  //   // this.user = {
  //   //   userId: user._id,
  //   //   name: `${user.firstName} ${user.lastName}`,
  //   //   email: user.email,
  //   //   phone: '555-454-3443',
  //   //   isActive: true
  //   // };

  //   console.log(this.user);
  // }

  // getUser() {
  //   return this.user;
  // }

  userLogin(loginData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const user = loginData.value;
    this.userUpdated = new Subject<User>();

    const authData = {
      email: user.email,
      password: user.password
    };

    const postObservable = this.http.post(
      'http://localhost:3000/api/user/getUser',
      authData,
      httpOptions
    );

    postObservable.subscribe(
      (res: {
        status: string;
        message: string;
        user: object;
        token: string;
      }) => {
        this.user = res.user;
        this.userService.setUser(res.user);
        const token = res.token;
        this.setToken(token);
      }
    );

    return postObservable;
  }

  isUserAuthenticated() {
    return this.user.userId && this.user.name;
  }
}
