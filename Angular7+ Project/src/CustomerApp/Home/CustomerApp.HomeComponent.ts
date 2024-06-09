import { Component } from '@angular/core';
import {BaseLogger } from "../Utility/CustomerApp.Logger"

@Component({
  templateUrl: './CustomerApp.HomeView.html',
})
export class HomeComponent {
  title = 'CustomerApplication';
  Logobj : BaseLogger | null = null ;
  constructor(_logger:BaseLogger){
  this.Logobj = _logger;
   this.Logobj.Log();
  }
}
