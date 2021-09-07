import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User;
  backend_url = "/api";
  constructor(private _http:HttpClient,private _router:Router) { }

  ngOnInit(): void {

  }

  registerUser(){
    this._http.post(this.backend_url+"/users", this.user).subscribe(result => {
      console.log(result);
      alert('You are registered successfully.');
      this._router.navigate(['/login']);
    }, error => {
      console.log(error + "here");
    })
  }
    
  

}


