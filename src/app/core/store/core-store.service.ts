import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ICoreState} from './core.state';
import * as Action from './core.actions';
import * as Selector from './core.selectors';

@Injectable({
  providedIn: 'root'
})
export class CoreStoreService {

  constructor(private store$: Store<ICoreState>) { }

  private dispatchAction(action: Action.CoreActions) {
    this.store$.dispatch(action);
  }

  dispatchTestOn() {
    this.dispatchAction(new Action.CoreTestOn());
  }
  dispatchTestOff() {
    this.dispatchAction(new Action.CoreTestOff());
  }


  getTestStatus() {
    return this.store$.pipe(
      select(Selector.selectTestStatus)
    );
  }

}

