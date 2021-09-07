import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id :any;
 user:User = new User();
 backend_url = "/api";

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

  updateUser(){
    this._http.patch(this.backend_url+"/users/" + this.id,this.user).subscribe(result =>{
      alert('User Updated Successfully');
     console.log(result);
     
      this._router.navigate(['/manage-users']);

    },error =>{
      console.log(error);
      
    }) 
    
  }

 


}
