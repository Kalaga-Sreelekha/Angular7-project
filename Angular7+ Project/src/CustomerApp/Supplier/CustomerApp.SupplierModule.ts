import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from './../Routing/CustomerApp.SupplierRouting';
import { SupplierComponent } from './../Supplier/CustomerApp.SupplierComponent';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    SupplierComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
