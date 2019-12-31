import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = {userId: 1, name: 'Jason Nelson', email: 'jasonn318@gmail.com', phone: '555-2342', isActive: true};

  getUser() {
    return this.user;
  }
}
