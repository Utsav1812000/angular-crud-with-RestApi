import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdditionComponent } from './addition/addition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { SignupApiComponent } from './signup-api/signup-api.component';
import { HomeApiComponent } from './home-api/home-api.component';
import { LoginApiComponent } from './login-api/login-api.component';
import { EditApiComponent } from './edit-api/edit-api.component';
// import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdditionComponent,
    HomeComponent,
    EditUserComponent,
    HeaderComponent,
    SignupApiComponent,
    HomeApiComponent,
    LoginApiComponent,
    EditApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
