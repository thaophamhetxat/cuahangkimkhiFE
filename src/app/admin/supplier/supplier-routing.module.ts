import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupplierHomeComponent} from './supplier-home/supplier-home.component'
import {SupplierCreateComponent} from './supplier-create/supplier-create.component'
import {SupplierEditComponent} from './supplier-edit/supplier-edit.component'
const routes: Routes = [
  {
    path : 'home',
    component : SupplierHomeComponent
  },{
    path: 'create',
    component : SupplierCreateComponent
  },{
    path : 'edit/:id',
    component: SupplierEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
