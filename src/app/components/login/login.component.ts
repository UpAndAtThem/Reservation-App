import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { GlobalEventsManagerService } from '../../services/global-events-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    public userService: UserService,
    protected globalEventsManager: GlobalEventsManagerService
  ) {
  }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm) {
    this.globalEventsManager.showNBar(true);
    this.loginService.setUser();
    this.loginService.router.navigate(['./user_home']);
  }
}
