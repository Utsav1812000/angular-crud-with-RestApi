import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string="";
  email:string="";
  password:string="";
  isValid:boolean = false;

  constructor(private userService:UserApiService,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  saveUser(){
    let userId = parseInt((Math.random()*1000)+"");
    let user = {userId:userId,name:this.firstName,email:this.email,password:this.password}
    this.isValid=true;
    this.userService.users.push(user)
    this.toastrService.success("Successfully Registered!")
    console.log(userId);
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    console.log("users: ",this.userService.users)
  }

}
