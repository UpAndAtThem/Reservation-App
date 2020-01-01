import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ToolsService } from '../../services/tools.service';


@Component({
  selector: 'app-user-make-reservation',
  templateUrl: './user-make-reservation.component.html',
  styleUrls: ['./user-make-reservation.component.css']
})
export class UserMakeReservationComponent implements OnInit {
  // userReservationForm: FormGroup;

  constructor(public toolsService: ToolsService) {
  }

  tools = this.toolsService.tools;
  selected;

  ngOnInit() {
    console.log(this.tools);
  }

  saveReservation() {
    // if (this.userReservationForm.dirty && this.userReservationForm.valid) {
    //   alert(`Name: ${this.userReservationForm.value.name}. Email: ${this.userReservationForm.value.email}`);
    // }
  }

  changeSelect(e) {
    console.log(this.selected, e);
  }
}
