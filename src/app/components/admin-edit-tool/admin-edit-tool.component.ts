import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { Tool } from 'src/app/models/Tool';

@Component({
  selector: 'app-admin-edit-tool',
  templateUrl: './admin-edit-tool.component.html',
  styleUrls: ['./admin-edit-tool.component.css']
})
export class AdminEditToolComponent implements OnInit {
  tools: Tool[];

  constructor(private toolService: ToolsService) { }

  ngOnInit() {
    this.tools = this.toolService.getTools();
  }

  onToolEdit(form) {
    console.log('admin-edit-tool-comp', form);
  }
}
