import { Injectable } from '@angular/core';
import { Observable, Subject, of, merge } from 'rxjs';
import { share, tap, mergeMap, switchMap } from 'rxjs/operators';
import { Reservation } from '../models/Reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient, private userService: UserService) {}
  public resosUpdated = new Subject<Reservation[]>();

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

  getReservations(userId): Observable<Reservation[]> {
    const resosObservable = this.http
      .get<any>(
        `http://localhost:3000/api/reservation/reservations/${this.userService.user._id}`
      )
      .pipe(
        tap(reservationData => {
          this.reservations = reservationData.reservations;
          this.resosUpdated.next(this.reservations);
        }),
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
        }),
        share()
      );

    return resosObservable;
  }

  addReservation(reso) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    reso.reservationStartTime = reso.reservationStartTime.getTime();
    reso.reservationEndTime = reso.reservationEndTime.getTime();

    const resoPostObservable = this.http.post(
      'http://localhost:3000/api/reservation/addReservation',
      reso,
      httpOptions
    );

    return resoPostObservable;
  }

  getUserToolResos(toolId, userId, reservations) {
    return reservations.filter(reso => {
      return reso.toolId === toolId && reso.userId === userId;
    });
  }

  getToolResos(toolId, date): Observable<object> {
    return this.http.get(
      `http://localhost:3000/api/reservation/reservations/${toolId}/${date.getTime()}`
    );
  }

  editReso(updatedReso, userId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(
        'http://localhost:3000/api/reservation/editReso',
        updatedReso,
        httpOptions
      )
      .pipe(
        switchMap((response: any) => {
          if (response.status === '401') {
            return of({ message: 'Error', status: '401' });
          } else {
            return this.getReservations(this.userService.user.userId).pipe(
              tap(reservations => {
                this.resosUpdated.next(reservations);
              })
            );
          }
        })
      );
  }

  deleteReso(reservation: Reservation, userId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http
      .delete(
        `http://localhost:3000/api/reservation/deleteReservation/${reservation.reservationId}`,
        httpOptions
      )
      .pipe(
        switchMap(_ => {
          return this.getReservations(this.userService.user._id);
        })
      )
      .subscribe(res => {
        this.reservations = res;
        this.resosUpdated.next(res);
      });
  }

  hasReservation(userId, toolId, reservations) {
    return reservations.some(reso => {
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
