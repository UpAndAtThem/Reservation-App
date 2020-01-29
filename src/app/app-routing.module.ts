import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { UserMakeReservationComponent } from './components/user-make-reservation/user-make-reservation.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';
import { AuthGuard } from './route-guards/auth-guard.service';
import { AuthGuardAdmin } from './route-guards/auth-guard-admin.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign_up', canActivate: [AuthGuard], component: SignUpComponent},
  {path: 'user_home', canActivate: [AuthGuard], component: UserHomeComponent},
  {path: 'make_reservation', canActivate: [AuthGuard], component: UserMakeReservationComponent},
  {path: 'contact', canActivate: [AuthGuard], component: ContactComponent},
  {path: 'admin', canActivate: [AuthGuard, AuthGuardAdmin], component: AdminConfigComponent},
  {path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
