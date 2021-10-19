import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from '../services/user';
import { UserSignupApiService } from '../services/user-signup-api.service';

@Component({
  selector: 'app-edit-api',
  templateUrl: './edit-api.component.html',
  styleUrls: ['./edit-api.component.css']
})
export class EditApiComponent implements OnInit {

  userId: number=0
  firstName:string = ""
  email:string=""
  password:string=""
  user:User = {id:0,name:"",email:"",password:""}
  constructor(private activatedRoute:ActivatedRoute,private toasterService:ToastrService,private router:Router,private userService:UserSignupApiService) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.userId
    this.userService.getUserbyId(this.userId).subscribe(res =>{
      this.user = res;
      console.log("User: ",this.user)
      
    })
  }

  UpdateUser(){
    this.userService.editUser(this.user).subscribe(res =>{
      console.log("updated: ",res);
      this.toasterService.success("Updated Successfully!")
      this.router.navigateByUrl("homeApi")

    })
  }

}
