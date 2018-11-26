import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {ICoreState} from './core.state';
import * as Action from './core.actions';
import {CoreEffects} from './core.effects';

@Injectable({
  providedIn: 'root'
})
export class CoreStoreService {

  constructor(
    private store$: Store<ICoreState>,
    private effects: CoreEffects
  ) { }

  private dispatchAction(action: Action.CoreActions) {
    this.store$.dispatch(action);
  }
  
  dispatchHeaderActionBtnClick() {
    this.dispatchAction(new Action.HeaderActionBtnClick());
  }

  getActionsHeaderClick() {
    return this.effects.HeaderActionBtnClick$;
  }

}

