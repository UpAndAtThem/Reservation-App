import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

import { LoginService } from './services/login.service';

@Injectable()
export class CanActivateUsersHomeRouteGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log('process.env');
      if (this.loginService.isUserAuthenticated()) {
        return true;
      } else {
        this.loginService.router.navigateByUrl('/login');
      }
  }
}
