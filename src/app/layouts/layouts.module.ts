import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginLayoutModule} from './login-layout/login-layout.module';
import {OfficeLayoutModule} from './office-layout/office-layout.module';
import {LoginLayoutRoutingModule} from './login-layout/login-layout-routing.module';
import {OfficeLayoutRoutingModule} from './office-layout/office-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginLayoutModule,
    OfficeLayoutModule,
  ],
  exports: [
    LoginLayoutRoutingModule,
    OfficeLayoutRoutingModule,
  ]
})
export class LayoutsModule { }
