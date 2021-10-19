import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  users: Array<any> = [];

  constructor() {

    let user = { userId:1,name:"utsav",email:"utsav@gmail.com",password:"12345"}
    this.users.push(user);
    
   }



}
