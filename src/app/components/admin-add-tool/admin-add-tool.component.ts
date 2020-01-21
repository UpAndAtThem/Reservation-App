import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-admin-add-tool',
  templateUrl: './admin-add-tool.component.html',
  styleUrls: ['./admin-add-tool.component.css', '../admin-config/admin-config.component.css']
})
export class AdminAddToolComponent implements OnInit {

  constructor(private toolService: ToolsService) { }

  ngOnInit() {
  }

  onAddTool(tool: Tool) {
  }
}
