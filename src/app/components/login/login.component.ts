import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, public userService: UserService) { }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm) {
    this.loginService.setUser();
    this.loginService.router.navigate(['./user_home']);
  }
}

