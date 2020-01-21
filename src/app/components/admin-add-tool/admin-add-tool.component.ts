import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { ToolsService } from 'src/app/services/tools.service';
import { MatDialog } from '@angular/material';
import { AdminAddToolConfirmDialogComponent } from '../admin-add-tool-confirm-dialog/admin-add-tool-confirm-dialog.component';


@Component({
  selector: 'app-admin-add-tool',
  templateUrl: './admin-add-tool.component.html',
  styleUrls: ['./admin-add-tool.component.css', '../admin-config/admin-config.component.css']
})
export class AdminAddToolComponent implements OnInit {

  constructor(private toolService: ToolsService, private addToolDialog: MatDialog) { }

  ngOnInit() {
  }

  onAddTool(tool: Tool) {
    const dialogRef = this.addToolDialog.open(AdminAddToolConfirmDialogComponent, {data: {toolObj: tool}});
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.toolService.addTool(tool);
        dialogRef.close();
      }
    });
  }
}
