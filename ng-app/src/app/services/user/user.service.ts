import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../user';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  updatingId: string;
  url: string = 'http://127.0.0.1:3000/users';
  users: User[];

  getUsers(): Observable<User[]> {
     return this.http.get<User[]>(this.url);
  }

  createUser(data: User): Observable<User[]> {
     return this.http.post<User[]>(this.url, data);
  }

  deleteUser(userName: string): Observable<User[]> {
     return this.http.delete<User[]>(this.url + '/' + userName);
  }

  updateUser(data: User): Observable<User[]> {
      return this.http.put<User[]>(this.url + '/' + this.updatingId, data);
  }
}
