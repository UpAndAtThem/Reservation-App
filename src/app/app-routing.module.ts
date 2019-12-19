import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user_home', canActivate: [CanActivateUsersHomeRouteGuard], component: UserHomeComponent},
  {path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
