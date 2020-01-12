import { Component, OnInit, Input } from '@angular/core';

import { ReservationService } from '../../services/reservation.service';
import { UserService } from '../../services/user.service';
import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../models/Tool';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  constructor(
    protected reservationService: ReservationService,
    protected userService: UserService,
    public toolsService: ToolsService
  ) {}
  reservations;
  reservationSubscription;
  tools: Tool[];

  @Input() user;

  ngOnInit() {
    this.getReservations();
    this.user = this.userService.getUser();
    this.tools = this.toolsService.getTools();
  }

  getReservations() {
    this.reservationSubscription = this.reservationService
      .getReservations(this.userService.user.userId)
      .subscribe(value => {
        this.reservations = value;
      });
  }

  addReservation(form) {
    const reservation = form;
    this.reservationService.addReservation(reservation);
  }

  hasReservations(tool: Tool) {
    return this.reservationService.hasReservation(this.user.userId, tool.toolId);
  }
}
