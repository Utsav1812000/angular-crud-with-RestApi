import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../services/user';
import { UserSignupApiService } from '../services/user-signup-api.service';

@Component({
  selector: 'app-home-api',
  templateUrl: './home-api.component.html',
  styleUrls: ['./home-api.component.css']
})
export class HomeApiComponent implements OnInit {
  isLoggedIn=false;
  users:Array<User>=[];

  constructor(private userSignupService:UserSignupApiService,private router:Router,private toastr:ToastrService) {
   }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if (token == null || token==""){
      this.router.navigateByUrl("loginApi")
      this.toastr.error("Login again!")
    }else{
      this.getAllUser();
    }
  
  }

  async getAllUser(){
    await this.userSignupService.getUsers().then(resp=>{
      this.users = resp;
      this.toastr.success("Data Retrieved Successful..")
    })
    console.log("Humara wala",this.users);
    console.log("After");
  }


  deleteUser(userId:number){
    this.userSignupService.deleteUserById(userId).subscribe(resp => {
      console.log(resp)
      let index = this.users.findIndex(user=>user.id == userId)
      this.users.splice(index,1)
      this.toastr.success("User Deleted!")
      this.router.navigateByUrl("homeApi")
    },err=>{
      this.toastr.success("Internal Server Error","Something Went Wrong!")
    })
  }

}
