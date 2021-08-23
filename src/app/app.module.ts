import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
