import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, Subject, Subscription } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';
import { UserService } from './user.service';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;
  token: string = localStorage.getItem('token');
  authStatusListener = new Subject<boolean>();
  isAuthorized: boolean;
  userUpdated: Subject<any>;

  constructor(
    public router: Router,
    private http: HttpClient,
    private userService: UserService,
    private sharingService: SharingService
  ) {}

  tokenUpdateSubscription: Subscription = this.getAuthStatusListener().subscribe((boolRes) => {
    this.isAuthorized = boolRes;
  });

  setToken(token) {
    this.token = token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  userLogin(loginData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const userData = loginData.value;

    const authData = {
      email: userData.email,
      password: userData.password
    };

    const postObservable = this.http.post(
      'http://localhost:3000/api/user/getUser',
      authData,
      httpOptions
    ).pipe(
      tap((data: {
        status: string;
        message: string;
        user: object;
        token: string;
      }) => {
        this.user = data.user;
        this.sharingService.setGenSettings(data.token, 'token');
        this.sharingService.setGenSettings(data.user, 'user');
        this.userService.setUser(data.user);
        const token = data.token;

        this.authStatusListener.next(!!token);

        this.setToken(token);
      }),
      share()
    );

    return postObservable;
  }

  isUserAuthenticated() {
    return this.user.userId && this.user.name;
  }
}
