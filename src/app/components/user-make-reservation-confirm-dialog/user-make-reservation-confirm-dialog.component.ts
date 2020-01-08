import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-make-reservation-confirm-dialog',
  templateUrl: './user-make-reservation-confirm-dialog.component.html',
  styleUrls: ['./user-make-reservation-confirm-dialog.component.css']
})
export class UserMakeReservationConfirmDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserMakeReservationConfirmDialogComponent>
  ) {}

  ngOnInit() {
    this.dialogRef.updateSize('25%');
    console.log('inside confirm component', this.data);
  }
}
