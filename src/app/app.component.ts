import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { GlobalEventsManagerService } from './services/global-events-manager.service';
import { SharingService } from './services/sharing.service';
import { ToastrService } from 'ngx-toastr';
import { ToolsService } from './services/tools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNBar = this.sharingService.getNavSettings() === 'true' || false;

  constructor(
    protected globalEventsManager: GlobalEventsManagerService,
    private sharingService: SharingService,
    private toastr: ToastrService,
    private toolService: ToolsService
  ) {
    this.globalEventsManager.showNavBarEmitter.subscribe(mode => {
      this.sharingService.setNavSettings(mode);
      this.showNBar = mode;
    });
  }

  ngOnInit() {
    this.globalEventsManager.showNBar(false);
    this.toolService.getTools();
  }
}
