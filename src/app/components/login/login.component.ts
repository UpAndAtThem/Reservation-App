import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm) {
    console.log('Form Object inside login Component: ', form.value);
    this.loginService.user = form.value;
    console.log('User on login service inside login component', this.loginService.user);
    this.loginService.router.navigate(['./user_home']);
  }
}

