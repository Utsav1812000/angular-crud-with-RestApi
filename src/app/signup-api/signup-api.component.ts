import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../services/user';
import { UserSignupApiService } from '../services/user-signup-api.service';

@Component({
  selector: 'app-signup-api',
  templateUrl: './signup-api.component.html',
  styleUrls: ['./signup-api.component.css']
})
export class SignupApiComponent implements OnInit {

  id:number=0
  firstName:string=""
  email:string=""
  password:string=""
  flag:any=1
  myForm:FormGroup


  
  constructor(private userSignupApi:UserSignupApiService,private router:Router,private toasterService:ToastrService) {
    this.myForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.email,Validators.required]),
      password: new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
   }

  ngOnInit(): void {
  }

  RegisterUser(){

    // let user:User = {id:this.id,name:this.firstName,email:this.email,password:this.password}
    let user = this.myForm.value;
    console.log(user);
    this.userSignupApi.addUser(user).subscribe(resp=>{
      console.log("response from Server: ",resp)
      this.toasterService.success("Successfully Sent Data To Server..")
      this.router.navigateByUrl("loginApi");
    });

    console.log(this.myForm.valid);
    
    
  }
  test(){
    console.log(this.myForm.valid);
    
  }


}
