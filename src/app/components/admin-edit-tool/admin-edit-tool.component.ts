import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { Tool } from 'src/app/models/Tool';
import { MatDialog } from '@angular/material';
import { AdminEditToolInputDialogComponent } from '../admin-edit-tool-input-dialog/admin-edit-tool-input-dialog.component';


@Component({
  selector: 'app-admin-edit-tool',
  templateUrl: './admin-edit-tool.component.html',
  styleUrls: ['./admin-edit-tool.component.css']
})
export class AdminEditToolComponent implements OnInit {
  @Input() tools: Tool[];


  constructor(private toolService: ToolsService, private editToolDialog: MatDialog) { }

  ngOnInit() {
    this.tools = this.toolService.tools;
  }

  onToolEdit(form) {
    const dialogRef = this.editToolDialog.open(AdminEditToolInputDialogComponent, {data: {tool: form}});

    dialogRef.afterClosed().subscribe(tool => {
      if (!!tool) {
        this.toolService.changeEditedTool(tool);
      }
    });
  }

  onDeletedTool() {
    console.log('deleted event, inside edit tool comp');
  }
}
