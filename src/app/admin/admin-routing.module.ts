import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {CategoryModule} from './category/category.module';
import  {ProductModule} from './product/product.module';
import  {SupplierModule} from './supplier/supplier.module';
import {HomeComponent} from "../shop/home/home.component";

const routes: Routes = [
  {
    path : 'category',
    component : CategoryModule
  },
  {
    path : 'product',
    component : ProductModule
  },
  {
    path : 'supplier',
    component : SupplierModule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
