import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Reservation } from '../models/Reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) {}
  private resosUpdated = new Subject<Reservation[]>();

  openTime = 8;
  closeTime = 21;
  milataryTimeToStandard = {
    8: '08',
    9: '09',
    10: '10',
    11: '11',
    12: '12',
    13: '01',
    14: '02',
    15: '03',
    16: '04',
    17: '05',
    18: '06',
    19: '07',
    20: '08',
    21: '09'
  };
  hoursOpen = [
    { hour: 8, min: 0 },
    { hour: 9, min: 0 },
    { hour: 10, min: 0 },
    { hour: 11, min: 0 },
    { hour: 12, min: 0 },
    { hour: 13, min: 0 },
    { hour: 14, min: 0 },
    { hour: 15, min: 0 },
    { hour: 16, min: 0 },
    { hour: 17, min: 0 },
    { hour: 18, min: 0 },
    { hour: 19, min: 0 },
    { hour: 20, min: 0 },
    { hour: 21, min: 0 }
  ];

  timeSlots = this.setTimeSlots();
  reservations: any[];
  subscription: Observable<Array<any>>;

  getResoUpdateListener() {
    return this.resosUpdated.asObservable();
  }

  getReservations(userId) {
    this.http
      .get<any>(`http://localhost:3000/api/reservations/${userId}`)
      .pipe(
        map(reservationData => {
          return reservationData.reservations.map(reso => {
            return {
              reservationId: reso._id,
              userId: reso.userId,
              toolId: reso.toolId,
              reservationStartTime: new Date(reso.reservationStartTime),
              reservationEndTime: new Date(reso.reservationEndTime)
            };
          });
        })
      )
      .subscribe(reservations => {
        const userResos = reservations.filter(reso => {
          return reso.userId === userId;
        });
        this.reservations = userResos;
        this.resosUpdated.next(this.reservations);
      });
  }

  addReservation(reso) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    reso.reservationStartTime = reso.reservationStartTime.getTime();
    reso.reservationEndTime = reso.reservationEndTime.getTime();

    this.http
      .post('http://localhost:3000/api/addReservation', reso, httpOptions)
      .subscribe(response => {
        this.getReservations(reso.userId);
        this.resosUpdated.next(this.reservations);
      });
  }

  getUserToolResos(toolId, userId) {
    return this.reservations.filter(reso => {
      return reso.toolId === toolId && reso.userId === userId;
    });
  }

  getToolResos(toolId, date) {
    return this.reservations.filter(reso => {
      return (
        reso.toolId === toolId &&
        reso.reservationStartTime.getFullYear() === date.getFullYear() &&
        reso.reservationStartTime.getMonth() === date.getMonth() &&
        reso.reservationStartTime.getDate() === date.getDate()
      );
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
    return Object.keys(this.milataryTimeToStandard).map(militaryHour => {
      const convertedHour = this.milataryTimeToStandard[militaryHour];
      const timeOfDay = parseInt(militaryHour, 10) > 11 ? 'PM' : 'AM';
      return `${convertedHour}:00 ${timeOfDay}`;
    });
  }

  getTimeSlots() {
    return this.timeSlots;
  }
}
