import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { baseUrl } from '../store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formsRegister={
    username:"",
    email:"",
    password:"",
    no_hp:""
  };

  responseRegister={
    error:0,
    message:""
  };

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    
  }

  registerRequest():void {
    this.http.post(`${baseUrl}/users/register`,this.formsRegister).toPromise().then((data:any)=>{
      console.log(data)
      this.responseRegister={
        error:1,
        message:data.message
      };
    }).catch((err:any)=>{
      console.log(err);
      if(err.error&&Array.isArray(err.error.message)){
        this.responseRegister={
          error:0,
          message:"Error : "+err.statusText
        };
      }else{
        this.responseRegister={
          error:0,
          message:"Error : "+err.error.message
        };
      }
    });
  }

}
