import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BuyComponent } from './buy/buy.component';
import { MenuPipe } from './menu/menu.pipe';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    MenuComponent,
    BuyComponent,
    MenuPipe
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule { }
