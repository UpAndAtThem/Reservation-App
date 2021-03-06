import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { ReservationService } from '../../services/reservation.service';
import { UserService } from '../../services/user.service';
import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../models/Tool';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { LoginService } from 'src/app/services/login.service';

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
    protected router: Router
  ) {}

  @Input() reservations: Reservation[];
  @Input() user;

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

  ngOnInit() {
  }

  hasReservations(tool: Tool, reservations) {
    return this.reservationService.hasReservation(
      this.userService.user._id,
      tool._id,
      reservations
    );
  }
}
