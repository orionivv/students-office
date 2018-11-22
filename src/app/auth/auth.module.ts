import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthPageModule} from './container/auth-page/auth-page.module';
import {AuthLoginModule} from './container/auth-login/auth-login.module';
import {AuthRegistrationModule} from './container/auth-registration/auth-registration.module';
import {AuthStoreModule} from './store/auth-store.module';

const MODULES = [
  AuthPageModule,
  AuthLoginModule,
  AuthRegistrationModule,
];

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule,
    CoreModule,
    ...MODULES
  ],
  providers: [AuthGuardService]
})
export class AuthModule {}
