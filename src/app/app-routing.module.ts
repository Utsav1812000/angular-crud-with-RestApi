import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { EditApiComponent } from './edit-api/edit-api.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeApiComponent } from './home-api/home-api.component';
import { HomeComponent } from './home/home.component';
import { LoginApiComponent } from './login-api/login-api.component';
import{LoginComponent} from './login/login.component';
import { SignupApiComponent } from './signup-api/signup-api.component';
import{SignupComponent} from './signup/signup.component';
const routes: Routes = [
{
  path: 'login',component:LoginComponent
},{
  path:'signup',component:SignupComponent
},{
  path:'addition',component:AdditionComponent
},{
  path:'home',component:HomeComponent
},{
  path:"header",component:HeaderComponent
},{
  path:"editUser/:userId",component:EditUserComponent
},{
  path:"signupApi",component:SignupApiComponent
},{
  path:"homeApi",component:HomeApiComponent
},{
  path:"loginApi",component:LoginApiComponent
},{
  path:"editApi/:userId",component:EditApiComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
