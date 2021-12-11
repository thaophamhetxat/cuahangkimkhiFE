import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule

  ]
})
export class ProductModule { }
