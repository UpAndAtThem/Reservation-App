import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    UsersComponent,
    UserComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [LoginService, UserService, CanActivateUsersHomeRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
