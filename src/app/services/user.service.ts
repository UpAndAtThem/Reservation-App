import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showNBar = false;

  constructor() {
  }

  user = {userType: 'Admin', userId: 1, name: 'Jason Nelson', email: 'jasonn318@gmail.com', phone: '555-2342', isActive: true};

  getUser() {
    return this.user;
  }

  isAdmin() {
    const promise = new Promise((res) => {
      setTimeout(() => {
        if (this.user.userType === 'Admin') {
          res(true);
        } else {
          res(false);
        }
      }, 800);
    });

    return promise;
  }
}
