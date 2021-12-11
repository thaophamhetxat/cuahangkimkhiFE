import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarPipe } from './navbar/navbar.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarPipe
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
