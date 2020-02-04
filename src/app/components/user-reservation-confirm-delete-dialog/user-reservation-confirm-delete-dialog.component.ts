import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-reservation-confirm-delete-dialog',
  templateUrl: './user-reservation-confirm-delete-dialog.component.html',
  styleUrls: ['./user-reservation-confirm-delete-dialog.component.css']
})
export class UserReservationConfirmDeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserReservationConfirmDeleteDialogComponent>
  ) {}

  ngOnInit() {
    this.dialogRef.updateSize('400px');
  }
}
