import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { UserReservationConfirmDeleteDialogComponent } from '../user-reservation-confirm-delete-dialog/user-reservation-confirm-delete-dialog.component';
// tslint:disable-next-line: max-line-length
import { UserEditReservationTimeSelectDialogComponent } from '../user-edit-reservation-time-select-dialog/user-edit-reservation-time-select-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

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
    protected toolsService: ToolsService,
    protected reservationService: ReservationService,
    protected matDialog: MatDialog,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  onDeleteReso(reso) {
    const dialogRef = this.matDialog.open(
      UserReservationConfirmDeleteDialogComponent,
      { data: { reservation: reso, tool: this.tool } }
    );

    dialogRef.afterClosed().subscribe(res => {
      const confirmed = res;

      if (confirmed) {
        this.reservationService.deleteReso(reso);
        this.toastrService.success(
          `${this.tool.toolName} ${formatDate(
            reso.reservationStartTime,
            'short',
            'en-US'
          )}`,
          'Reservation deleted'
        );
      }
    });
  }

  onEditReso(reso) {
    const dialogRef = this.matDialog.open(
      UserEditReservationTimeSelectDialogComponent,
      {
        data: {
          toolName: this.tool.toolName,
          reservation: reso
        }
      }
    );
  }
}
