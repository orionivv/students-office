import {Action} from '@ngrx/store';
import {AuthLoginRequest, AuthLoginResponse} from '../models/auth.model';

export enum AuthActionTypes {
  AuthError =             '[Auth] Auth Error',
  Login =                 '[Auth] Login',
  LoginSuccess =          '[Auth] Login Success',
  LoginFailure =          '[Auth] Login Failure',
  Logout =                '[Auth] Logout',
  GetUserInfo =           '[Auth] Get UserInfo',
  GetUserInfoSuccess =    '[Auth] Get UserInfo Success',
  GetUserInfoFailure =    '[Auth] Get UserInfo Failure',

}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: AuthLoginRequest) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: AuthLoginResponse) {}
}

export class LoginFailure implements  Action {
  readonly type = AuthActionTypes.LoginFailure;
}

export class Logout implements  Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthAction =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  ;
