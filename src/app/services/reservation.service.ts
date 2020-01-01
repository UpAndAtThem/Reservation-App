import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor() {}

  reservations = [
    {
      reservationId: 1,
      userId: 1,
      toolId: 1,
      reservationStartTime: new Date('December 25, 2019 14:30:00'),
      reservationEndTime: new Date('December 25, 2019 15:30:00')
    },
    {
      reservationId: 2,
      userId: 1,
      toolId: 4,
      reservationStartTime: new Date('December 6, 2019 16:30:00'),
      reservationEndTime: new Date('December 6, 2019 17:30:00')
    },
    {
      reservationId: 3,
      userId: 1,
      toolId: 2,
      reservationStartTime: new Date('March 18, 2019 19:30:00'),
      reservationEndTime: new Date('March 18, 2019 20:30:00')
    },
    {
      reservationId: 4,
      userId: 1,
      toolId: 2,
      reservationStartTime: new Date('September 28, 2019 16:30:00'),
      reservationEndTime: new Date('September 28, 2019 17:30:00')
    },
    {
      reservationId: 5,
      userId: 1,
      toolId: 3,
      reservationStartTime: new Date('April 8, 2019 16:30:00'),
      reservationEndTime: new Date('April 8, 2019 17:30:00')
    },
    {
      reservationId: 6,
      userId: 1,
      toolId: 5,
      reservationStartTime: new Date('May 20, 2019 16:30:00'),
      reservationEndTime: new Date('May 20, 2019 17:30:00')
    },
    {
      reservationId: 7,
      userId: 1,
      toolId: 5,
      reservationStartTime: new Date('December 31, 2019 23:30:00'),
      reservationEndTime: new Date('January 1, 2019 00:30:00')
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

  deleteReso(reservation: Reservation) {
    this.reservations = this.reservations.filter(
      reso => reso.reservationId !== reservation.reservationId
    );
  }
}
