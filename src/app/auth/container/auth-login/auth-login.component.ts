import { Component, OnInit } from '@angular/core';
import {AuthStoreService} from '../../store/auth-store.service';

@Component({
  selector: 'auth-login',
  template: `
    <auth-login-form
      (submitLogin)='login($event)'
      [loading]="authLoading"
    ></auth-login-form>
  `,
  styles: [`
    :host {
      margin: auto;
    }
  `]
})
export class AuthLoginComponent implements OnInit {
  authLoading: boolean;

  constructor(
    private authStoreService: AuthStoreService,
  ) { }

  ngOnInit() {
    this.authStoreService.selectAuthLoading().subscribe(loading => this.authLoading = loading);
  }

  login(data) {
    this.authStoreService.dispatchLogin(data);
  }

}
