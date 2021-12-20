import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/product',
    loadChildren: () => import('./admin/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'admin/category',
    loadChildren: () => import('./admin/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'admin/supplier',
    loadChildren: () => import('./admin/supplier/supplier.module').then(module => module.SupplierModule)
  },
  //seting mặc định để đi vào login
  { path: '', redirectTo: '/shop/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
