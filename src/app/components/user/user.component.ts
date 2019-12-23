import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  user;

  @Output() outputUser = new EventEmitter();

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log('inside user component ngOnInit', this.user);
    this.outputUser.emit(this.user);
  }
}
