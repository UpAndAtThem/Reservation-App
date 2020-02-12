import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.loginService.user;

        if (currentUser && this.loginService.token) {
            console.log('inside auth.interceptor');
            console.log('currentUser: ', currentUser);
            console.log('token: ', this.loginService.token);

            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${this.loginService.token}`
                }
            });
        }

        return next.handle(request);
    }
}
