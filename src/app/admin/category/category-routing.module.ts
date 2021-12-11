import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryHomeComponent} from './category-home/category-home.component'
import {CategoryCreateComponent} from './category-create/category-create.component'
import {CategoryEditComponent} from './category-edit/category-edit.component'
const routes: Routes = [
  {
    path : 'home',
    component : CategoryHomeComponent
  },{
    path: 'create',
    component : CategoryCreateComponent
  },{
    path : 'edit/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
