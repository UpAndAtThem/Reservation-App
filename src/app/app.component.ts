import { Component, OnInit, AfterViewInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { GlobalEventsManagerService } from './services/global-events-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showNBar = false;

  constructor(protected globalEventsManager: GlobalEventsManagerService) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      this.showNBar = mode;
    });
  }

  ngOnInit() {
  }
}
