import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return {userName: 'Jason', email: 'jasonn318@gmail.com'};
  }
}
