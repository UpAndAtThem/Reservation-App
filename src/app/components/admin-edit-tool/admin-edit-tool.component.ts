import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { Tool } from 'src/app/models/Tool';
import { MatDialog } from '@angular/material';
import { AdminEditToolInputDialogComponent } from '../admin-edit-tool-input-dialog/admin-edit-tool-input-dialog.component';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-edit-tool',
  templateUrl: './admin-edit-tool.component.html',
  styleUrls: ['./admin-edit-tool.component.css']
})
export class AdminEditToolComponent implements OnInit {
  tools: Tool[];
  toolSub: Subscription = this.toolService
    .getToolUpdateListener()
    .subscribe(toolData => {
      this.tools = toolData;
    });

  constructor(
    protected toolService: ToolsService,
    private editToolDialog: MatDialog,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.toolService.getTools();
  }

  onToolEdit(form) {
    const dialogRef = this.editToolDialog.open(
      AdminEditToolInputDialogComponent,
      {
        data: { tool: form },
        panelClass: 'admin-edit-tool-input-dialog-component'
      }
    );

    dialogRef.afterClosed().subscribe(toolData => {
      if (!!toolData) {
        toolData.original.toolName = toolData.changes.toolName;
        toolData.original.toolDescription = toolData.changes.toolDescription;
        toolData.original.userNeedsCert = toolData.changes.userNeedsCert;

        this.toolService.changeEditedTool(toolData.original);
        this.toastrService.success(`${toolData.original.toolName} Edited`, 'Tool edited successfully');
      }
    });
  }
}
