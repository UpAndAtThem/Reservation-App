import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { Tool } from 'src/app/models/Tool';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-config',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.css']
})
export class AdminConfigComponent implements OnInit {
  tools: Tool[];
  toolSub: Subscription;

  constructor(private toolService: ToolsService) { }

  ngOnInit() {
    // this.toolService.getTools();
    this.toolSub = this.toolService.getToolUpdateListener().subscribe((toolData) => {
      this.tools = toolData;
    });
  }

  onDeleteTool(event) {
    this.tools = this.toolService.tools;
  }
}
