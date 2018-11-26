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
  CheckUserInfo =         '[Auth] Check UserInfo',
  CheckUserInfoComplete = '[Auth] Check UserInfo Complete',
  CheckUserInfoEmpty =    '[Auth] Check UserInfo Empty',

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

export class GetUserInfo implements  Action {
  readonly type = AuthActionTypes.GetUserInfo;
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionTypes.GetUserInfoSuccess;
  constructor(public payload: any) {}
}

export class GetUserInfoFailure implements Action {
  readonly type = AuthActionTypes.GetUserInfoFailure;
}

export class CheckUserInfo implements  Action {
  readonly type = AuthActionTypes.CheckUserInfo;
}
export class CheckUserInfoComplete implements  Action {
  readonly type = AuthActionTypes.CheckUserInfoComplete;
}
export class CheckUserInfoEmpty implements  Action {
  readonly type = AuthActionTypes.CheckUserInfoEmpty;
}

export type AuthAction =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoFailure
  | CheckUserInfo
  | CheckUserInfoComplete
  | CheckUserInfoEmpty
  ;
