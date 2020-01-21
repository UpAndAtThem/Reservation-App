import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Tool } from 'src/app/models/Tool';

@Component({
  selector: 'app-admin-edit-tool-input-dialog',
  templateUrl: './admin-edit-tool-input-dialog.component.html',
  styleUrls: ['./admin-edit-tool-input-dialog.component.css']
})
export class AdminEditToolInputDialogComponent implements OnInit {
  toolName;
  toolDescription;
  userNeedsCert;
  toolId;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<AdminEditToolInputDialogComponent>
  ) {}

  ngOnInit() {
    this.toolId = this.data.tool.tool.toolId;
    this.toolName = this.data.tool.tool.toolName;
    this.toolDescription = this.data.tool.tool.toolDescription;
    this.userNeedsCert = this.data.tool.tool.userNeedsCert;
  }

  onEditTool(form) {
    const tool = form.value;

    tool.toolId = this.toolId;
    this.dialogRef.close(tool);
  }
}
