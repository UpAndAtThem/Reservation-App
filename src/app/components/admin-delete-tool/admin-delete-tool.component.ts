import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-admin-delete-tool',
  templateUrl: './admin-delete-tool.component.html',
  styleUrls: ['./admin-delete-tool.component.css']
})
export class AdminDeleteToolComponent implements OnInit {
  tools: Tool[] = this.toolService.getTools();

  constructor(private toolService: ToolsService) { }

  ngOnInit() {
  }

  onToolDelete(tool: Tool) {
    console.log(tool);
  }
}
