import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signUpUser(user) {
    user.isAdmin = false;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:3000/api/user/addUser', user, httpOptions).subscribe(res => {
      console.log('after user posted response:', res);
    });
  }
}
