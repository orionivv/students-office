import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as Action from './auth.actions';
import {flatMap, map, switchMap, take, tap} from 'rxjs/operators';
import {AuthApiService} from '../services/auth-api.service';
import {of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {AuthStoreService} from './auth-store.service';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
    private cookie: CookieService,
    private router: Router,
    private authStoreService: AuthStoreService,
  ) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Action.Login>(Action.AuthActionTypes.Login),
    map((action) => action.payload),
    switchMap((payload: any) =>
      this.authApiService
        .login(payload)
        .pipe(
          map((res: any) =>
            res.status === 200
              ? new Action.LoginSuccess({
                  session: res.session,
                  userInfo: res.userInfo
                })
              : new Action.LoginFailure()
          )
        )
    ),
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType<Action.LoginSuccess>(Action.AuthActionTypes.LoginSuccess),
    map(() => {
      this.cookie.set('isActive', 'true');
      this.router.navigateByUrl(`/subject-selections`);
      return new Action.GetUserInfo();
    })
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Action.Logout>(Action.AuthActionTypes.Logout),
    tap(() => {
      this.cookie.delete('isActive');
      this.router.navigateByUrl(`/login`);
    })
  );

  @Effect()
  getUserInfo$ = this.actions$.pipe(
    ofType<Action.GetUserInfo>(Action.AuthActionTypes.GetUserInfo),
    switchMap(() =>
      this.authApiService.userInfo().pipe(
        map( (res: any) =>
          res.status === 200
            ? new Action.GetUserInfoSuccess({
              ...res.data
            })
            : new Action.GetUserInfoFailure()
        )
      )
    )
  );

  @Effect()
  checkUserInfo$ = this.actions$.pipe(
    ofType<Action.CheckUserInfo>(Action.AuthActionTypes.CheckUserInfo),
    switchMap(() =>
      this.authStoreService.selectUserInfo().pipe(
        take(1),
        map(userInfo => userInfo
          ? new Action.CheckUserInfoComplete()
          : new Action.GetUserInfo()
        )
      )
    )
  );


}
