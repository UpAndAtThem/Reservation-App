import { Component, OnInit, Inject } from '@angular/core';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-edit-reservation-time-select-dialog',
  templateUrl: './user-edit-reservation-time-select-dialog.component.html',
  styleUrls: ['./user-edit-reservation-time-select-dialog.component.css']
})
export class UserEditReservationTimeSelectDialogComponent implements OnInit {
  constructor(
    protected reservationService: ReservationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<
      UserEditReservationTimeSelectDialogComponent
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
  allReservedTimesDate: Reservation[];

  ngOnInit() {
    this.timeSlots = this.reservationService.getTimeSlots();
    this.toolName = this.data.toolName;
    this.toolId = this.data.reservation.toolId;
    this.userId = this.data.reservation.userId;
    this.reservationDate = this.data.reservation.reservationStartTime;
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

  editReservationTime(timeSlot) {
    const hour = this.getMilitaryHour(timeSlot);

    const startReso = new Date(this.reservationDate.getTime());
    const endReso = new Date(this.reservationDate.getTime());

    startReso.setHours(hour);
    endReso.setHours(hour + 1);

    this.data.reservation.reservationStartTime = startReso.getTime();
    this.data.reservation.reservationEndTime = endReso.getTime();

    this.reservationService.editReso(this.data.reservation, this.userId);

    this.dialogRef.close();
    this.toastrService.success(
      `New Reservation: ${this.toolName} ${ formatDate(this.data.reservation.reservationStartTime, 'short', 'en-US')}`,
      'Reservation edited'
    );
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
}
