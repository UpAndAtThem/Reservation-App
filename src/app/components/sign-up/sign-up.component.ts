import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signUpService: SignUpService) { }

  ngOnInit() {
  }

  onSignUpSubmit(form: NgForm) {
    this.signUpService.signUpUser(form);
  }
}
