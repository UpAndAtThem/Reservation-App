import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        console.log('inside auth interceptor');
        const currentUser = this.loginService.user;
        console.log('currentUser:', currentUser);
        if (currentUser && this.loginService.token) {
            console.log('inside clone block');
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${this.loginService.token}`
                }
            });
        }

        return next.handle(request);
    }
}
