import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';
import { AuthService } from 'src/app/auth.service';

// import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';

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

  ngOnInit() {}

  logout() {
    this.globalEventsManager.showNBar(false);
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
