import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-admin-add-tool-confirm-dialog',
  templateUrl: './admin-add-tool-confirm-dialog.component.html',
  styleUrls: ['./admin-add-tool-confirm-dialog.component.css']
})
export class AdminAddToolConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AdminAddToolConfirmDialogComponent>) { }

  ngOnInit() {
    this.dialogRef.updateSize('400px');
  }
}
