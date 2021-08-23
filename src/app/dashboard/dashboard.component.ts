import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {baseUrl} from "../store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  saldo:number=1000;

  wallet:any={};

  token:any=localStorage.getItem("token");
  
  history:any=[];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.getWallet();
    this.getHistory();
  }

  getWallet():void {
    this.http.get(`${baseUrl}/wallet/me`,{
     headers:{
       token:this.token
     }
   }).toPromise().then((data:any)=>{
      this.wallet=data.Data;
   }).catch(console.log);
  }

  getHistory():void {
    this.http.get(`${baseUrl}/wallet/history`,{
     headers:{
       token:this.token
     }
   }).toPromise().then((data:any)=>{
     this.history=data.Data;
   }).catch(console.log);
  }

  logoutUser():void {
    localStorage.clear();
  }

}
