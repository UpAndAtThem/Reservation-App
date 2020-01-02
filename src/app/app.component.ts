import { Component, OnInit, AfterViewInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { GlobalEventsManagerService } from './services/global-events-manager.service';
import { SharingService } from './services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showNBar = this.sharingService.getNavSettings() === 'true' || false;

  constructor(protected globalEventsManager: GlobalEventsManagerService, private sharingService: SharingService) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      this.sharingService.setNavSettings(mode);
      this.showNBar = mode;
    });
  }

  ngOnInit() {
  }
}
