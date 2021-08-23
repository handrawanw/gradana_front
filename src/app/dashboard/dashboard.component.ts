import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  userInfo = {
    name:"Handrawan",
    email:"handrawanw@gmail.com",
    no_hp:"0813-1425-4420"
  };

  saldo = 1000;

  history=[1,2];

  constructor(private http:HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/wallet/history",{
     headers:{
       token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjI0ZTM0NWRmMjUwMDcwMGIyMDNmMCIsImlhdCI6MTYyOTYzODIxNywiZXhwIjoxNzE2MDM4MjE3fQ.rBJhXKNjg_DdhCEYfdIpiJkdtUzBePUPZ2MIKg3g4o8"
     }
   }).toPromise().then((data:any)=>{
    //  this.history=data.Data;
   }).catch(console.log);
  }

}
