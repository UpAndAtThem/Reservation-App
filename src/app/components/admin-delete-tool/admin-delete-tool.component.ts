import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { ToolsService } from 'src/app/services/tools.service';
import { MatDialog } from '@angular/material';
import { AdminDeleteToolConfirmDialogComponent } from '../admin-delete-tool-confirm-dialog/admin-delete-tool-confirm-dialog.component';

@Component({
  selector: 'app-admin-delete-tool',
  templateUrl: './admin-delete-tool.component.html',
  styleUrls: ['./admin-delete-tool.component.css']
})
export class AdminDeleteToolComponent implements OnInit {
  tools: Tool[];
  @Output() deletedTool = new EventEmitter();

  constructor(private toolService: ToolsService, private deleteToolDialog: MatDialog) { }

  ngOnInit() {
    this.tools = this.toolService.tools;
  }

  onToolDelete(toolData) {
    const dialogRef = this.deleteToolDialog.open(AdminDeleteToolConfirmDialogComponent, {data: toolData});

    dialogRef.afterClosed().subscribe(res => {
      this.toolService.deleteTool(toolData.tool);
      this.tools = this.toolService.tools;
      this.deletedTool.emit();
    });
  }
}
