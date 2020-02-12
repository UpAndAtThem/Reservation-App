import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';
import { SharingService } from 'src/app/services/sharing.service';

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
    private router: Router,
    private toolService: ToolsService,
    private sharingService: SharingService
  ) {}

  signUpPath = 'sign_up';

  ngOnInit() {}

  onLoginSubmit(form: NgForm) {
    this.toolService.getTools();
    this.loginService.userLogin(form).subscribe((res) => {
      if (res.status === '201') {
        this.userService.setUser(res.user);
        this.authService.login();
        this.router.navigate(['./user_home']);
      } else {
        this.router.navigate(['./login']);
      }
    });
  }
}
