import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {CategoryHomeComponent} from './category-home/category-home.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';

@NgModule({
  declarations: [
    CategoryHomeComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
