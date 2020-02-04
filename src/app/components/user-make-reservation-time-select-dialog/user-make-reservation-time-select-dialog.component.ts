import { Component, OnInit, Inject } from '@angular/core';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { UserMakeReservationConfirmDialogComponent } from '../user-make-reservation-confirm-dialog/user-make-reservation-confirm-dialog.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-make-reservation-time-select-dialog',
  templateUrl: './user-make-reservation-time-select-dialog.component.html',
  styleUrls: ['./user-make-reservation-time-select-dialog.component.css']
})
export class UserMakeReservationTimeSelectDialogComponent implements OnInit {
  allReservedTimesDate: Reservation[];

  constructor(
    protected reservationService: ReservationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<
      UserMakeReservationTimeSelectDialogComponent
    >,
    private confirmResoDialog: MatDialog,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  timeSlots;
  toolName;
  toolId;
  userId;
  reservationDate;

  ngOnInit() {
    this.timeSlots = this.reservationService.getTimeSlots();
    this.toolName = this.data.toolName;
    this.toolId = this.data.toolId;
    this.userId = this.data.userId;
    this.reservationDate = this.data.date;
    this.allReservedTimesDate = this.reservationService.getToolResos(
      this.toolId,
      this.reservationDate
    );

    this.dialogRef.updateSize('450px');
  }

  getMilitaryHour(timeSlot) {
    const hour = timeSlot.slice(0, 2);
    const timeOfDay = timeSlot.slice(timeSlot.length - 2);

    return timeOfDay === 'PM' && hour !== '12'
      ? parseInt(hour, 10) + 12
      : parseInt(hour, 10);
  }

  addReservationTime(timeSlot) {
    const hour = this.getMilitaryHour(timeSlot);
    let confirmed;

    const startReso = new Date(this.reservationDate.getTime());
    const endReso = new Date(this.reservationDate.getTime());

    startReso.setHours(hour);
    endReso.setHours(hour + 1);

    const newReso: Reservation = {
      userId: this.userId,
      toolId: this.toolId,
      reservationStartTime: startReso,
      reservationEndTime: endReso
    };

    const dialogRef = this.confirmResoDialog.open(
      UserMakeReservationConfirmDialogComponent,
      {
        data: {
          toolName: this.toolName,
          date: this.reservationDate,
          time: timeSlot,
          hr: hour
        }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      confirmed = res;

      if (confirmed) {
        this.reservationService.addReservation(newReso);
        this.toastrService.success(
          formatDate(newReso.reservationStartTime, 'short', 'en-US'),
          `${this.toolName} Reservation added:`
        );
        this.router.navigate(['user_home']);
        this.dialogRef.close();
      }
    });
  }

  hasReservation(toolId, date, timeSlot) {
    const res = this.allReservedTimesDate.some(reso => {
      const resoHour = reso.reservationStartTime.getHours();
      const resoStdHour = this.reservationService.milataryTimeToStandard[
        resoHour
      ];

      return (
        parseInt(resoStdHour, 10) === parseInt(timeSlot.slice(0, 2), 10) &&
        this.sameTimeOfDay(timeSlot, reso.reservationStartTime.getHours())
      );
    });

    return res;
  }

  sameTimeOfDay(toBeAddedtimeSlot, resoHour) {
    const timeOfDay = toBeAddedtimeSlot.slice(toBeAddedtimeSlot.length - 2);

    return timeOfDay === (resoHour > 11 ? 'PM' : 'AM');
  }

  confirmReso() {}
}
