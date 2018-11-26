import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as Action from './core.actions';
import {map, tap} from 'rxjs/operators';


@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
  ) {
  }

  @Effect({ dispatch: false })
  HeaderActionBtnClick$ = this.actions$.pipe(
    ofType<Action.HeaderActionBtnClick>(Action.CoreActionTypes.HeaderActionBtnClick),
    map(action => action.type)
  );

}
