import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserSignupApiService {

  isLoggedIn:boolean=false;

  baseUrl:string="http://bootapi.herokuapp.com";
  user:any

  constructor(private http:HttpClient) { }

  addUser(user:User):Observable<any>{
    var flag = false;
    return this.http.post(this.baseUrl+"/addUser",user)
  }

  getUsers():Promise<any>{
    return this.http.get(this.baseUrl+"/allUser").toPromise()
  }

  authenticate(user:User):Observable<any>{
    this.isLoggedIn=true;
    return this.http.post(this.baseUrl+"/authenticate",user)
  }

  editUser(user:User):Observable<any>{
    return this.http.put(this.baseUrl+"/updateUser",user)
  }

  getUserbyId(userId:number):Observable<any>{
    return this.http.get(this.baseUrl+"/getUserById/"+userId)
  }

  deleteUserById(userId:number):Observable<any>{
    return this.http.delete(this.baseUrl+"/deleteById/"+userId)
    
  }

}
