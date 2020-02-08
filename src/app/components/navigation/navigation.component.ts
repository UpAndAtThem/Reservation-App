import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    public router: Router,
    protected globalEventsManager: GlobalEventsManagerService,
    private authService: AuthService
  ) {}

  navBarItems: { name: string, path: string | null, clickMethod?: string }[] = [
    { name: 'home', path: 'user_home' },
    { name: 'make reservation', path: 'make_reservation' },
    { name: 'contact', path: 'contact' },
    { name: 'configure tools', path: 'admin'}
  ];

  ngOnInit() {}

  logout() {
    this.globalEventsManager.showNBar(false);
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
