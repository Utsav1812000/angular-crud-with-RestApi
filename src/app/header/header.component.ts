import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserSignupApiService } from '../services/user-signup-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActive:boolean=false;

  constructor(private toastrService:ToastrService,private router:Router,private userApi:UserSignupApiService) { }

  ngOnInit(): void {
    this.isActive=localStorage.getItem("token")==""?false:true;
    // this.isActive=this.userApi.isLoggedIn;
  }

  addToaster(){
    this.toastrService.success("Perform Addition..")
  }

  LoginToaster(){
    this.isActive=true;
    this.toastrService.success("Login Your Self..")
  }

  SignupToaster(){
    this.toastrService.success("Register Your Self..")
  }

  ApiTestingToaster(){
    this.toastrService.success("Testing Signup Api..")
  }

  LogoutToaster(){
    this.isActive=false
    localStorage.removeItem("token")
    this.router.navigateByUrl("loginApi")
    this.toastrService.success("Successfully Logout..")
  }

}