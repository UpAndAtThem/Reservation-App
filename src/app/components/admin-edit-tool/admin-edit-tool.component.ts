import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { Tool } from 'src/app/models/Tool';
import { MatDialog } from '@angular/material';
import { AdminEditToolInputDialogComponent } from '../admin-edit-tool-input-dialog/admin-edit-tool-input-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-edit-tool',
  templateUrl: './admin-edit-tool.component.html',
  styleUrls: ['./admin-edit-tool.component.css']
})
export class AdminEditToolComponent implements OnInit {
  tools: Tool[] = this.toolService.tools;
  toolSub: Subscription = this.toolService
    .getToolUpdateListener()
    .subscribe(toolData => {
      console.log('subscription triggered: admin edit tool', toolData);
      this.tools = toolData;
    });

  constructor(
    private toolService: ToolsService,
    private editToolDialog: MatDialog
  ) {}

  ngOnInit() {}

  onToolEdit(form) {
    const dialogRef = this.editToolDialog.open(
      AdminEditToolInputDialogComponent,
      {
        data: { tool: form },
        panelClass: 'admin-edit-tool-input-dialog-component'
      }
    );

    dialogRef.afterClosed().subscribe(tool => {
      if (!!tool) {
        this.toolService.changeEditedTool(tool);
      }
    });
  }
}
