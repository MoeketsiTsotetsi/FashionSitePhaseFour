import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  
  canActivate(): boolean {
    if (this.isAdmin()) {
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn') == "true") {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    
  }

  isAdmin(){
    if(localStorage.getItem('isAdmin') == "true"){
      return true;
    }
    return false;
  }
}
