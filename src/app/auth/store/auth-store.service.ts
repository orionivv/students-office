import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as Action from './auth.actions';
import {AuthState} from './auth.state';
import * as Selector from './auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  constructor(private store$: Store<AuthState>) { }

  private dispatchAction(action: Action.AuthAction) {
    this.store$.dispatch(action);
  }

  dispatchLogin(data) {
    this.dispatchAction(new Action.Login(data));
  }

  selectAuthLoading() {
    return this.store$.pipe(
      select(Selector.selectUserInfoLoading)
    );
  }
}

