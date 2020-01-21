import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTableModule,
  MatRippleModule,
  MatCheckboxModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ReservationService } from './services/reservation.service';
import { ToolsService } from './services/tools.service';
import { GlobalEventsManagerService } from './services/global-events-manager.service';
import { SharingService } from './services/sharing.service';

import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';
import { UserMakeReservationComponent } from './components/user-make-reservation/user-make-reservation.component';
import { ContactComponent } from './components/contact/contact.component';
// tslint:disable-next-line: max-line-length
import { UserMakeReservationTimeSelectDialogComponent } from './components/user-make-reservation-time-select-dialog/user-make-reservation-time-select-dialog.component';
// tslint:disable-next-line: max-line-length
import { UserMakeReservationConfirmDialogComponent } from './components/user-make-reservation-confirm-dialog/user-make-reservation-confirm-dialog.component';
import { UserReservationsTableComponent } from './components/user-reservations-table/user-reservations-table.component';
// tslint:disable-next-line: max-line-length
import { UserReservationConfirmDeleteDialogComponent } from './components/user-reservation-confirm-delete-dialog/user-reservation-confirm-delete-dialog.component';
// tslint:disable-next-line: max-line-length
import { UserEditReservationTimeSelectDialogComponent } from './components/user-edit-reservation-time-select-dialog/user-edit-reservation-time-select-dialog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';
import { AdminAddToolComponent } from './components/admin-add-tool/admin-add-tool.component';
import { AdminEditToolComponent } from './components/admin-edit-tool/admin-edit-tool.component';
import { AdminDeleteToolComponent } from './components/admin-delete-tool/admin-delete-tool.component';
import { AdminAddToolConfirmDialogComponent } from './components/admin-add-tool-confirm-dialog/admin-add-tool-confirm-dialog.component';
import { AdminEditToolInputDialogComponent } from './components/admin-edit-tool-input-dialog/admin-edit-tool-input-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    UsersComponent,
    UserComponent,
    NavigationComponent,
    UserReservationsComponent,
    UserMakeReservationComponent,
    ContactComponent,
    UserMakeReservationTimeSelectDialogComponent,
    UserMakeReservationConfirmDialogComponent,
    UserReservationsTableComponent,
    UserReservationConfirmDeleteDialogComponent,
    UserEditReservationTimeSelectDialogComponent,
    SignUpComponent,
    AdminConfigComponent,
    AdminAddToolComponent,
    AdminEditToolComponent,
    AdminDeleteToolComponent,
    AdminAddToolConfirmDialogComponent,
    AdminEditToolInputDialogComponent
  ],
  entryComponents: [
    UserMakeReservationTimeSelectDialogComponent,
    UserMakeReservationConfirmDialogComponent,
    UserReservationConfirmDeleteDialogComponent,
    UserEditReservationTimeSelectDialogComponent,
    AdminAddToolConfirmDialogComponent,
    AdminEditToolInputDialogComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatCheckboxModule
  ],
  providers: [
    LoginService,
    UserService,
    ReservationService,
    ToolsService,
    GlobalEventsManagerService,
    SharingService,
    CanActivateUsersHomeRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
