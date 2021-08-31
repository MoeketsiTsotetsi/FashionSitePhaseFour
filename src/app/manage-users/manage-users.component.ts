import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:User[]  = [];
  user:User = new User();
  id :any;
  constructor(private _userService:UserService,private _http:HttpClient,private _router:Router) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(result =>{
      this.users = result;
      console.log(this.users);
      
    },error =>{
      console.log(error);
      
    })

  }

 

}
