import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NotFoundHalaman} from "./notfound";

import {YourGuardGuard} from "./your-guard.guard";

const routes: Routes = [{
  path:"",
  component:LoginComponent
},{
  path:"dashboard",
  component:DashboardComponent,
  canActivate:[YourGuardGuard]
},{
  path:"register",
  component:RegisterComponent
},{
  path:"**",
  component:NotFoundHalaman
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponent=[
  LoginComponent,
  DashboardComponent,
  RegisterComponent,
];