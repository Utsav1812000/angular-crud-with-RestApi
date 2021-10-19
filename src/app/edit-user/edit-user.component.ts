import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId:number=-1
  firstName:string=""
  email:string=""
  password:string=""
  user:any
  constructor(private activatedRoute:ActivatedRoute,private userApi:UserApiService,private router:Router) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.userId
    this.user = this.userApi.users.find(user=>user.userId == this.userId)
    this.firstName = this.user.name
    this.email = this.user.email
    this.password = this.user.password
    
  }

  UpdateUser(){

    this.user.name = this.firstName
    this.user.email = this.email
    this.user.password = this.password
    this.router.navigateByUrl("/home")
  }

}