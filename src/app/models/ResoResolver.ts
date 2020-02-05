import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Reservation } from './Reservation';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { UserService } from '../services/user.service';

@Injectable()
export class ResoResolver implements Resolve<Reservation> {
  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // this.reservationService.getReservations(this.userService.user.userId);
    return this.reservationService.getReservations(this.userService.user.userId);
  }
}
