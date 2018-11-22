import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as Action from './core.actions';
import {map} from 'rxjs/operators';


@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
  ) { }

  @Effect({ dispatch: false })
  testCoreOn$ = this.actions$.pipe(
    ofType<Action.CoreTestOn>(Action.CoreActionTypes.CoreTestOn),
    map(() => console.log('EFFECT WORKS'))
  );
}
