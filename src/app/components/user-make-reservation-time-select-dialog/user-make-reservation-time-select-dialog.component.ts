import { Component, OnInit, Inject } from '@angular/core';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

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
    >
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

    this.dialogRef.updateSize('40%');
  }

  getMilitaryHour(timeSlot) {
    const hour = timeSlot.slice(0, 2);
    const timeOfDay = timeSlot.slice(timeSlot.length - 2);

    return timeOfDay === 'PM' ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
  }

  addReservationTime(timeSlot) {
    const hour = this.getMilitaryHour(timeSlot);

    this.reservationDate.setHours(hour);

    const startReso = new Date(this.reservationDate.getTime());
    const endReso = new Date(this.reservationDate.getTime());

    startReso.setHours(hour);
    endReso.setHours(hour + 1);

    const newReso: Reservation = {
      reservationId: this.reservationService.reservations.length + 1,
      userId: this.userId,
      toolId: this.toolId,
      reservationStartTime: startReso,
      reservationEndTime: endReso
    };

    this.reservationService.addReservation(newReso);
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
