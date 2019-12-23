import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }
  @Input() userName: string;

  ngOnInit() {
  }

  getUserName(user) {
    console.log('yoyoyoy', user);
    this.userName = user.userName;
  }
}
