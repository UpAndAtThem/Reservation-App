import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';

// import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    public router: Router,
    protected globalEventsManager: GlobalEventsManagerService
  ) {}

  ngOnInit() {}

  logout() {
    this.globalEventsManager.showNBar(false);
    this.router.navigate(['login']);
  }
}
