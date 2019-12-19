import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  userName: string;

  ngOnInit() {
    this.userName = this.loginService.user.name;
  }
}
