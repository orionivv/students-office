import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as Action from './auth.actions';
import {flatMap, map, switchMap, tap} from 'rxjs/operators';
import {AuthApiService} from '../services/auth-api.service';
import {of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
    private cookie: CookieService,
    private router: Router
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

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType<Action.LoginSuccess>(Action.AuthActionTypes.LoginSuccess),
    tap(() => {
      this.cookie.set('isActive', 'true');
      this.router.navigateByUrl(`/subject-selections`);
    })
  )

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Action.Logout>(Action.AuthActionTypes.Logout),
    tap(() => {
      this.cookie.delete('isActive');
      this.router.navigateByUrl(`/login`);
    })
  )
}
