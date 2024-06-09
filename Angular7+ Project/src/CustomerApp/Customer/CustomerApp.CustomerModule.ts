import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from './../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from './../Customer/CustomerApp.CustomerComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridComponent} from '../Utility/CustomerApp.GridComponent';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';
@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyInterceptor,multi:true}
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
