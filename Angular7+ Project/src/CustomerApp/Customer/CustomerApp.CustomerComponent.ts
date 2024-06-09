import { Component , Injector} from '@angular/core';
import {Customer} from "./CustomerApp.model";
import { BaseLogger} from "../Utility/CustomerApp.Logger";
import { HttpClient } from "@angular/common/http"
@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
 Logobj:BaseLogger | null = null;
 Disable:boolean = false;
 constructor(_injector:BaseLogger,public http:HttpClient){
  this.Logobj =_injector;
  this.Logobj.Log();
 }
PostToServer(){
  //http://localhost:3000/Customers
  //create a light weight object
  this.Disable =true
  let CustDto:any ={};
  CustDto.CustomerCode = this.CustomerModel.CustomerCode;
  CustDto.CustomerName = this.CustomerModel.CustomerName;
  CustDto.CustomerAmount = this.CustomerModel.CustomerAmount;
this.http.post("http://localhost:3000/Customers",CustDto).subscribe(res =>this.Success(res),res =>this.Error(res))
}

GetFromServer(){
  //http://localhost:3000/Customers
  //create a light weight object
this.http.get("http://localhost:3000/Customers").subscribe(res =>this.SuccessGET(res),res =>this.Error(res))
}

Error(res:any){
  console.log(res.json());
}
Success(res:any){
this.GetFromServer();
}
SuccessGET(res:any){
  this.CustomerModels =res;
  this.Disable =false;
  this.CustomerModel = new Customer();
}

 SelectCustomer(_selected:Customer){
  this.CustomerModel = _selected;
}
  Add(){
   this.CustomerModels.push(this.CustomerModel);
   this.CustomerModel = new Customer();
  }
  hasError(typeofvalidator:string,contorlname:string):boolean{
 return this.CustomerModel.formCustomerGroup.controls[contorlname].hasError(typeofvalidator);
  }
}
