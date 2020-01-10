import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { UserReservationConfirmDeleteDialogComponent } from '../user-reservation-confirm-delete-dialog/user-reservation-confirm-delete-dialog.component';

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
    protected reservationService: ReservationService,
    protected matDialog: MatDialog
  ) {}

  ngOnInit() {
  }

  onDeleteReso(reso) {
    const dialogRef = this.matDialog.open(UserReservationConfirmDeleteDialogComponent, {data: { reservation: reso, tool: this.tool}});

    dialogRef.afterClosed().subscribe(res => {
      const confirmed = res;

      if (confirmed) {
        this.reservationService.deleteReso(reso);
      }
    });
  }
}