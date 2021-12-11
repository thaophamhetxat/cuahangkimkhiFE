import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupplierRoutingModule} from './supplier-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {SupplierHomeComponent} from './supplier-home/supplier-home.component';
import {SupplierCreateComponent} from './supplier-create/supplier-create.component';
import {SupplierEditComponent} from './supplier-edit/supplier-edit.component';

@NgModule({
  declarations: [
    SupplierHomeComponent,
    SupplierCreateComponent,
    SupplierEditComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ReactiveFormsModule
  ]
})
export class SupplierModule {
}
