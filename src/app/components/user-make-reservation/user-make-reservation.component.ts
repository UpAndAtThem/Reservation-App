import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { UserMakeReservationTimeSelectDialogComponent } from '../user-make-reservation-time-select-dialog/user-make-reservation-time-select-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-make-reservation',
  templateUrl: './user-make-reservation.component.html',
  styleUrls: ['./user-make-reservation.component.css']
})
export class UserMakeReservationComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(this.minDate.getTime() + 86400000 * 31); // add 30 days to date obj
  tools = this.toolsService.tools;
  toolSub: Subscription;
  selected;

  constructor(
    public toolsService: ToolsService,
    private timeSelectDialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.toolSub = this.toolsService.getToolUpdateListener().subscribe((toolData) => {
      this.tools = toolData;
    });
  }

  changeSelect() {}

  onReservationDateSubmit(form) {
    this.timeSelectDialog.open(UserMakeReservationTimeSelectDialogComponent, {
      data: {
        userId: this.userService.user._id,
        toolId: this.toolsService.getToolId(form.tool),
        date: form.date,
        toolName: form.tool
      }
    });
  }

  getErrorMessage(elem) {
    return 'Date needs to be no more than 31 days in the future';
  }
}
