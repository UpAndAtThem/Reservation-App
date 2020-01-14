import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  constructor() {}

  user: User;
  userId: number;
  userName: string;
  email: string;
  phone: string;
  isActive: boolean;

  ngOnInit() {}

  getUser(u: User) {
    this.userName = u.name;
    this.userId = u.userId;
    this.email = u.email;
    this.phone = u.phone;
    this.isActive = u.isActive;
    this.user = u;
  }
}
