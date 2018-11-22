import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthLoginComponent} from './auth-login.component';
import {AuthLoginFormModule} from '../../components/auth-login-form/auth-login-form.module';

@NgModule({
  imports: [
    CommonModule,
    AuthLoginFormModule
  ],
  declarations: [AuthLoginComponent],
  exports: [AuthLoginComponent]
})
export class AuthLoginModule { }
