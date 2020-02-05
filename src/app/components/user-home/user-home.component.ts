import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../../models/User';
import { ReservationService } from 'src/app/services/reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { GlobalEventsManagerService } from 'src/app/services/global-events-manager.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit, AfterViewInit {
  constructor(
    private reservationService: ReservationService,
    private activatedRoute: ActivatedRoute,
    private globalEventsManager: GlobalEventsManagerService
  ) {}

  user: User;
  userId: string;
  userName: string;
  email: string;
  phone: string;
  isActive: boolean;
  reservations: Reservation[];

  ngOnInit() {
    this.activatedRoute.data.subscribe(resoData => {
      this.reservations = resoData.resos;
    });
  }

  ngAfterViewInit() {
    this.globalEventsManager.showNBar(true);
  }

  getUser(u: User) {
    this.userName = u.name;
    this.userId = u.userId;
    this.email = u.email;
    this.phone = u.phone;
    this.isActive = u.isActive;
    this.user = u;
  }
}
