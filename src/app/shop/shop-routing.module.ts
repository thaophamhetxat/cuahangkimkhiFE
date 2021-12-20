import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {HomeComponent} from './home/home.component';
import  {DashboardComponent} from './dashboard/dashboard.component';
import  {MenuComponent} from './menu/menu.component';
import  {BuyComponent} from './buy/buy.component';
import  {LoginComponent} from './login/login.component';
import  {SigupComponent} from './sigup/sigup.component';
const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'menu',
    component : MenuComponent
  },
  {
    path : 'buy',
    component : BuyComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : SigupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
