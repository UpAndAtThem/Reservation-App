import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-admin-delete-tool-confirm-dialog',
  templateUrl: './admin-delete-tool-confirm-dialog.component.html',
  styleUrls: ['./admin-delete-tool-confirm-dialog.component.css']
})
export class AdminDeleteToolConfirmDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AdminDeleteToolConfirmDialogComponent>
  ) {}

  ngOnInit() {
    this.dialogRef.updateSize('400px');
  }
}
