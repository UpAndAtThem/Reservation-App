import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = { name: 'User', password: ''};

  constructor(public router: Router) { }

  isUserAuthenticated() {
    return this.user.name !== 'User' && this.user.name;
  }
}
