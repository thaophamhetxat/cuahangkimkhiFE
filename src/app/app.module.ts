import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FooterComponent} from './shared/footer/footer.component';


import {ProductHomeComponent} from './admin/product/product-home/product-home.component';
import {ProductEditComponent} from './admin/product/product-edit/product-edit.component';
import {ProductCreateComponent} from './admin/product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './shop/login/login.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

    ProductHomeComponent,
    ProductEditComponent,
    ProductCreateComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
