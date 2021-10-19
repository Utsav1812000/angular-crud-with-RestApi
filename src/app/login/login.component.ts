import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";
  flag:boolean=false;
  msg:string="";

  constructor(private userService:UserApiService,private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    this.userService.users.forEach(user => {
      if(user.email == this.email && user.password == this.password){
        this.flag=true;
      }else{
        this.flag=false;
      }
    });

    if(!this.flag){
      console.log("Invalid Username or Password");
      this.msg="Invalid Username or Password!";
      this.toastrService.error("Invalid Email or Password!")
    }else{
      console.log("success!");
      this.msg="Successfully Login..";
      this.toastrService.success("Successfully Logged in!");
      this.router.navigateByUrl("/home");
    }
  }

}
