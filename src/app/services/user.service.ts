import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  backend_url = "/api";

  getUsers(): Observable<User[]> {
      return this._http.get<User[]>(this.backend_url+"/users/");
  }

  getUserById(id:any): Observable<User> {
      return this._http.get<User>(this.backend_url+"/users/"+id);
  }

  
}
