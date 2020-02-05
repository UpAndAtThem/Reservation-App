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
import { User } from './User';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // implement user
  }
}
