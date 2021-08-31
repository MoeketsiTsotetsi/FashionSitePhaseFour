import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:any;
  user:User = new User();
  constructor(private _route:ActivatedRoute,private _userService:UserService,private _http:HttpClient,
    private _router:Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    this._userService.getUserById(this.id).subscribe(result =>{
      this.user = result;
      
    },error =>{
      console.log(error);
      
    })
    
    
  }

  deleteUser(){
    
    this._http.delete(`http://localhost:3000/users/` + this.id).subscribe(result =>{
     this._router.navigate(['/manage-users']);
    },error =>{
      console.log(error);
      
    })
  }

}
