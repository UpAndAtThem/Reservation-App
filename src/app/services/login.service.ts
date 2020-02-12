import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, Subject } from 'rxjs';
import { UserService } from './user.service';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;
  token: string = localStorage.getItem('token');
  userUpdated: Subject<any>;

  constructor(
    public router: Router,
    private http: HttpClient,
    private userService: UserService,
    private sharingService: SharingService
  ) {}

  setToken(token) {
    this.token = token;
  }

  userLogin(loginData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const userData = loginData.value;
    this.userUpdated = new Subject<User>();

    const authData = {
      email: userData.email,
      password: userData.password
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
        this.sharingService.setGenSettings(res.token, 'token');
        this.sharingService.setGenSettings(res.user, 'user');
        this.userService.setUser(res.user);
        const token = res.token;
        this.setToken(token);
      },
      (err) => {
        console.log('\n\n\ngetUserError error: ', err, '\n\n\n');
      }
    );

    return postObservable;
  }

  isUserAuthenticated() {
    return this.user.userId && this.user.name;
  }
}
