import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login.service';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { CanActivateUsersHomeRouteGuard } from './can-activate-users-home-route.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent
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
  providers: [LoginService, CanActivateUsersHomeRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
