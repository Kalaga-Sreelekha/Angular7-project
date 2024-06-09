import { HomeComponent } from '../Home/CustomerApp.HomeComponent';

export const MainRoutes =[
  {path:'Home',component:HomeComponent},
  {path:'Customer',loadChildren:() =>import('../Customer/CustomerApp.CustomerModule').then(module=>module.CustomerModule)},
  {path:'Supplier',loadChildren:()=> import('../Supplier/CustomerApp.SupplierModule').then(module =>module.SupplierModule)},
  {path:'',component:HomeComponent},

]
