import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-admin-config',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.css']
})
export class AdminConfigComponent implements OnInit {
  tools = this.toolService.tools;

  constructor(private toolService: ToolsService) { }

  ngOnInit() {
  }

  onDeleteTool(event) {
    this.tools = this.toolService.tools;
  }
}
