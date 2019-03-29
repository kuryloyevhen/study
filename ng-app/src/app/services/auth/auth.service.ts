import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  url: string = 'http://127.0.0.1:3000/auth';
  userRole: string;
  isLogin: string;

  takeCookie(): Observable<any> {
     return this.http.get<any>('http://127.0.0.1:3000');
  }

  login(data): Observable<any> {
     return this.http.post<any>('http://127.0.0.1:3000/login', data);
  }

  logout(): Observable<any> {
     return this.http.get<any>('http://127.0.0.1:3000/logout');
  }
}
