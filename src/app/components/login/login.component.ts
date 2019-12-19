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
    this.loginService.user = form.value;
    this.loginService.router.navigate(['./user_home']);
  }
}

