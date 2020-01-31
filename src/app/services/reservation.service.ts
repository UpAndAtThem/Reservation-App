import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor() {}
  openTime = 8;
  closeTime = 21;
  milataryTimeToStandard = {8: '08', 9: '09', 10: '10', 11: '11', 12: '12', 13: '01', 14: '02', 15: '03', 16: '04',
    17: '05', 18: '06', 19: '07', 20: '08', 21: '09'};
  hoursOpen = [{hour: 8, min: 0}, {hour: 9, min: 0}, {hour: 10, min: 0}, {hour: 11, min: 0}, {hour: 12, min: 0}, {hour: 13, min: 0},
    {hour: 14, min: 0}, {hour: 15, min: 0}, {hour: 16, min: 0}, {hour: 17, min: 0},
      {hour: 18, min: 0}, {hour: 19, min: 0}, {hour: 20, min: 0}, {hour: 21, min: 0}];

  timeSlots = this.setTimeSlots();
  reservations = [
    {
      reservationId: 1,
      userId: 1,
      toolId: '5e336f67a279a87c8a4e4e10',
      reservationStartTime: new Date('January 17, 2020 12:00:00'),
      reservationEndTime: new Date('January 17, 2020 13:00:00')
    },
    {
      reservationId: 2,
      userId: 1,
      toolId: '5e336f67a279a87c8a4e4e10',
      reservationStartTime: new Date('January 17, 2020 13:00:00'),
      reservationEndTime: new Date('January 17, 2020 14:00:00')
    },
    {
      reservationId: 3,
      userId: 1,
      toolId: '5e336f67a279a87c8a4e4e10',
      reservationStartTime: new Date('January 18, 2020 19:00:00'),
      reservationEndTime: new Date('January 18, 2020 20:00:00')
    },
    {
      reservationId: 4,
      userId: 1,
      toolId: '5e336f67a279a87c8a4e4e10',
      reservationStartTime: new Date('February 02, 2020 16:00:00'),
      reservationEndTime: new Date('February 02, 2020 17:00:00')
    },
    {
      reservationId: 5,
      userId: 1,
      toolId: '5e336db5a279a87c8a4e4e0f',
      reservationStartTime: new Date('February 5, 2020 16:00:00'),
      reservationEndTime: new Date('February 5, 2020 17:00:00')
    },
    {
      reservationId: 6,
      userId: 1,
      toolId: '5e336db5a279a87c8a4e4e0f',
      reservationStartTime: new Date('January 20, 2020 16:00:00'),
      reservationEndTime: new Date('January 20, 2020 17:00:00')
    },
    {
      reservationId: 7,
      userId: 1,
      toolId: '5e336db5a279a87c8a4e4e0f',
      reservationStartTime: new Date('January 20, 2020 08:00:00'),
      reservationEndTime: new Date('January 20, 2020 09:00:00')
    },
    {
      reservationId: 8,
      userId: 1,
      toolId: '5e336d2fa279a87c8a4e4e0e',
      reservationStartTime: new Date('January 31, 2020 11:00:00'),
      reservationEndTime: new Date('January 31, 2020 12:00:00')
    },
    {
      reservationId: 9,
      userId: 1,
      toolId: '5e336d2fa279a87c8a4e4e0e',
      reservationStartTime: new Date('January 31, 2020 12:00:00'),
      reservationEndTime: new Date('January 31, 2020 13:00:00')
    },
    {
      reservationId: 10,
      userId: 1,
      toolId: '5e336d2fa279a87c8a4e4e0e',
      reservationStartTime: new Date('January 31, 2020 08:00:00'),
      reservationEndTime: new Date('January 31, 2020 09:00:00')
    }
  ];

  subscription: Observable<Array<any>>;

  getReservations(userId): Observable<any> {
    this.subscription = new Observable(observer => {
      const userResos = this.reservations.filter(reso => {
        return reso.userId === userId;
      });

      observer.next(userResos);
    });

    return this.subscription;
  }

  addReservation(reso) {
    this.reservations.push(reso);
  }

  getUserToolResos(toolId, userId) {
    return this.reservations.filter(reso => {
      return reso.toolId === toolId && reso.userId === userId;
    });
  }

  getToolResos(toolId, date) {
    return this.reservations.filter((reso) => {
      // tslint:disable-next-line: max-line-length
      return reso.toolId === toolId &&
        reso.reservationStartTime.getFullYear() === date.getFullYear() &&
          reso.reservationStartTime.getMonth() === date.getMonth() &&
            reso.reservationStartTime.getDate() === date.getDate();
    });
  }

  deleteReso(reservation: Reservation) {
    this.reservations = this.reservations.filter(
      reso => reso.reservationId !== reservation.reservationId
    );
  }

  hasReservation(userId, toolId) {
    return this.reservations.some(reso => {
      return reso.userId === userId && reso.toolId === toolId;
    });
  }

  setTimeSlots() {
    return Object.keys(this.milataryTimeToStandard)
          .map((militaryHour) => {
            const convertedHour = this.milataryTimeToStandard[militaryHour];
            const timeOfDay = parseInt(militaryHour, 10) > 11 ? 'PM' : 'AM';
            return `${convertedHour}:00 ${timeOfDay}`;
          });
  }

  getTimeSlots() {
    return this.timeSlots;
  }
}
