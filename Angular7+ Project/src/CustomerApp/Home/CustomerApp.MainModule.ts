import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './../Routing/CustomerApp.MainRouting';
import { HomeComponent } from './../Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './../Home/CustomerApp.MasterPageComponent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';
@NgModule({
  declarations: [
     MasterPageComponent,
     HomeComponent 
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [{
    provide:BaseLogger,
    useClass:ConsoleLogger
  },
  {provide: "1", useClass:DbLogger},
  {provide:"2",useClass:ConsoleLogger}
],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
