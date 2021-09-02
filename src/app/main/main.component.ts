import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authGuardService:AuthGuardService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginStatus() {
    if (this._authGuardService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  adminStatus(){
    if(this._authGuardService.isAdmin()){
      return true;
    }else{
      return false;
    }
  }

  logout() {
    this._authGuardService.logout();
    alert('You are logged out successfully.');
    this._router.navigate(['/home']);
  }

}
