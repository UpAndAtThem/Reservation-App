import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

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

import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    UsersComponent,
    UserComponent,
    NavigationComponent,
    UserReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FormsModule
  ],
  providers: [LoginService, UserService, ReservationService, ToolsService, CanActivateUsersHomeRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
