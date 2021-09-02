import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:User[] = [];
  user:User = new User();

  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(result =>{
      this.users = result;
      console.log(this.users);
      
      
    })
  }

  login(){
    if(this.isLoggedin()){
      alert('You are successfully logged in');
      localStorage.setItem('isLoggedIn',"true")
      if(this.isAdmin()){
        localStorage.setItem('isAdmin',"true");
      }
      this._router.navigate(['/home']);
    }else{
      alert('Invalid credentials , try again...');
    }

  }

  isLoggedin():boolean{
    for (let i = 0; i < this.users.length; i++) {
      if(this.user.username == this.users[i].username && 
        this.user.password == this.users[i].password){
          return true;
        }
      
    }
    return false;
  }

  isAdmin(){

    for (let i = 0; i < this.users.length; i++) {
      if(this.user.username == this.users[i].username && 
        this.user.password == this.users[i].password ){
          if(this.users[i].type == 'Admin' || this.users[i].type =='admin'){
            return true;
          }
        }
      
    }
    return false;
  }

}
