import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { baseUrl } from '../store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formsLogin:any={
    email:"",
    password:""
  };

  responseLogin:any={
    error:0,
    message:""
  };

  constructor(private http:HttpClient) { }

  ngOnInit(): void {}

  LoginRequest():void {
    this.http.post(`${baseUrl}/users/login`,this.formsLogin).toPromise().then((data:any)=>{
      this.responseLogin={
        error:1,
        message:data.message
      };
    }).catch((err:any)=>{
      console.log(err)
      if(err.error&&Array.isArray(err.error.message)){
        this.responseLogin={
          error:0,
          message:"Error : "+err.statusText
        };
      }else{
        this.responseLogin={
          error:0,
          message:"Error : "+err.error.message
        };
      }
    });
  }

}