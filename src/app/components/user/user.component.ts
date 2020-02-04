import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User;

  @Output() outputUser = new EventEmitter();

  ngOnInit() {
    this.user = this.userService.getUser();
    this.outputUser.emit(this.user);
  }
}
