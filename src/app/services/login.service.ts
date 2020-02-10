import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor(public router: Router, private http: HttpClient) {}

  setUser() {
    this.user = {
      userId: '1',
      name: 'Jason Nelson',
      email: 'jasonn319@gmail.com',
      phone: '555-454-3443',
      isActive: true
    };
  }

  getUser() {
    return this.user;
  }

  userLogin(loginData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const user = loginData.value;

    const authData = {
      email: user.email,
      password: user.password
    };

    console.log('inside userLogin service', authData);

    return this.http.post('http://localhost:3000/api/user/getUser', authData, httpOptions);
  }

  isUserAuthenticated() {
    return this.user.userId && this.user.name;
  }
}
