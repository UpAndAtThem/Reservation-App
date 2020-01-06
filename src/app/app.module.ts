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
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
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
    UserMakeReservationTimeSelectDialogComponent
  ],
  entryComponents: [UserMakeReservationTimeSelectDialogComponent],
  imports: [
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
    FormsModule,
    ReactiveFormsModule
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
