import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showNBar = false;

  constructor() {}

  user;

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  isAdmin() {
    const promise = new Promise(res => {
      if (this.user.isAdmin) {
        res(true);
      } else {
        res(false);
      }
    });

    return promise;
  }
}
