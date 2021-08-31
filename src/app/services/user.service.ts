import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
      return this._http.get<User[]>(`http://localhost:3000/users/`)
  }

  getUserById(id:any): Observable<User> {
      return this._http.get<User>(`http://localhost:3000/users/${id}`)
  }
}
