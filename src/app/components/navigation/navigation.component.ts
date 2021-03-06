import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    public router: Router,
    protected globalEventsManager: GlobalEventsManagerService,
    private authService: AuthService,
    protected userService: UserService
  ) {}

  navBarItems: { name: string, path: string, auth: string }[] = [
    { name: 'home', path: 'user_home', auth: 'all' },
    { name: 'make reservation', path: 'make_reservation', auth: 'all' },
    { name: 'contact', path: 'contact', auth: 'all' },
    { name: 'configure tools', path: 'admin', auth: 'admin'}
  ];

  ngOnInit() {}

  logout() {
    this.globalEventsManager.showNBar(false);
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
