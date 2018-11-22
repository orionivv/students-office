import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginLayoutComponent} from './login-layout.component';
import {AuthLoginComponent} from '../../auth/container/auth-login/auth-login.component';
import {AuthRegistrationComponent} from '../../auth/container/auth-registration/auth-registration.component';
import {AuthPageComponent} from '../../auth/container/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/login`
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: AuthPageComponent,
        children: [
          {
            path: '',
            component: AuthLoginComponent,
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'register',
        component: AuthPageComponent,
        children: [
          {
            path: '',
            component: AuthRegistrationComponent,
            pathMatch: 'full',
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class LoginLayoutRoutingModule { }
