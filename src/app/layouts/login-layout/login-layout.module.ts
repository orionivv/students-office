import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginLayoutComponent} from './login-layout.component';
import {RouterModule} from '@angular/router';
import {LoginLayoutRoutingModule} from './login-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoginLayoutRoutingModule,
  ],
  exports: [
    RouterModule,
    LoginLayoutComponent
  ],
  declarations: [LoginLayoutComponent]
})
export class LoginLayoutModule { }
