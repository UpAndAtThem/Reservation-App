import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { GlobalEventsManagerService } from '../../services/global-events-manager.service';
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
    protected globalEventsManager: GlobalEventsManagerService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    this.loginService.setUser();
    setTimeout(() => {
      this.globalEventsManager.showNBar(true);
      this.authService.login();
      this.router.navigate(['./user_home']);
    }, 800);
  }
}
