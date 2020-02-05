import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    public userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    this.loginService.setUser();
    this.userService.getUser();
    this.authService.login();
    this.router.navigate(['./user_home']);
  }
}
