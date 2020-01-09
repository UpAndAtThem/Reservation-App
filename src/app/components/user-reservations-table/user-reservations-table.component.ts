import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-user-reservations-table',
  templateUrl: './user-reservations-table.component.html',
  styleUrls: ['./user-reservations-table.component.css']
})
export class UserReservationsTableComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'startTime',
    'endTime',
    'edit',
    'delete'
  ];

  @Input() resos;
  @Input() tool;

  constructor(
    protected toolService: ToolsService,
    protected reservationService: ReservationService
  ) {}

  ngOnInit() {
  }
}
