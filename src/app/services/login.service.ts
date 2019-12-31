import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor(public router: Router) { }

  setUser() {
    this.user = {userId: 1, name: 'Jason Nelson', email: 'jasonn319@gmail.com', phone: '555-454-3443', isActive: true};
  }

  getUser() {
    return this.user;
  }

  isUserAuthenticated() {
    console.log('isUserAuthenticated()', this.getUser());
    return this.user.userId && this.user.name;
  }
}
