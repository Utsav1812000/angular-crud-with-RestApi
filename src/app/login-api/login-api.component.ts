import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../header/header.component';
import { User } from '../services/user';
import { UserSignupApiService } from '../services/user-signup-api.service';

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrls: ['./login-api.component.css']
})
export class LoginApiComponent implements OnInit {

  email:string=""
  password:string=""

  user:User={id:0,name:"",email:"",password:""};
  constructor(private userApiService:UserSignupApiService,private router:Router,private toastr:ToastrService,private h:HeaderComponent) { }
  
  
  ngOnInit(): void{
    
  }
  
  authenticate(){
    this.user={id:0,name:"",email:this.email,password:this.password}
    this.userApiService.authenticate(this.user).subscribe(resp => {
      console.log("Authentication Response: ",resp)
      this.user=resp
      localStorage.setItem("token",this.user.id+"")
      this.router.navigateByUrl("/homeApi")
      this.toastr.success("Authentication Successfully..")
      this.h.isActive=true;
    },err =>{
      this.toastr.error("Authentication Failed..")
    })
  }

}
