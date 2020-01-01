import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { UserMakeReservationComponent } from './components/user-make-reservation/user-make-reservation.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user_home', component: UserHomeComponent},
  {path: 'make_reservation', component: UserMakeReservationComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
