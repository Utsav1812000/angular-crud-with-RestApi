import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserApiService,private router:Router) { }

  users:Array<any>=[]
  ngOnInit(): void {
    this.users = this.userService.users
  }

  editUser(userId:number){
    console.log(userId);
    this.userService.users.forEach(user => {
        if(user.userId ==  userId){
          console.log("User",user);
          this.router.navigateByUrl("/editUser/"+userId)
        }
    });

  }

  deleteUser(userId:number){
    let index = -1;
    for (let i = 0; i < this.userService.users.length; i++) {
      if(this.userService.users[i].userId == userId){
        index = i;
        break
      }
    }
    this.userService.users.splice(index,1)
  }

}
