import { Component, OnInit, Input } from '@angular/core';

import { ReservationService } from '../../services/reservation.service';
import { UserService } from '../../services/user.service';
import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../models/Tool';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  constructor(
    protected reservationService: ReservationService,
    protected userService: UserService,
    public toolService: ToolsService,
    protected router: Router,
    private route: ActivatedRoute
  ) {}
  reservations;

  tools: Tool[] = this.toolService.tools;
  toolSub: Subscription = this.toolService
    .getToolUpdateListener()
    .subscribe((tools: Tool[]) => {
      this.tools = tools;
    });

  resoSub: Subscription = this.reservationService.getResoUpdateListener()
    .subscribe(resos => {
      this.reservations = resos;
    });

  @Input() user;

  ngOnInit() {
    this.user = this.userService.getUser();
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getReservations(this.userService.user.userId);
  }

  addReservation(form) {
    const reservation = form;
    this.reservationService.addReservation(reservation);
  }

  hasReservations(tool: Tool) {
    return this.reservationService.hasReservation(
      this.userService.user.userId,
      tool._id
    );
  }
}
