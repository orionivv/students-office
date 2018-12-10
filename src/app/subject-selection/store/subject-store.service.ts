import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as Action from './subject.actions';
import {SubjectState} from './subject.state';
import * as Selector from './subject.selectors';

@Injectable({
  providedIn: 'root'
})
export class SubjectStoreService {

  constructor(private store$: Store<SubjectState>) { }

  private dispatchAction(action: Action.SubjectAction) {
    this.store$.dispatch(action);
  }


  dispatchGetSubjectsForUser() {
   this.dispatchAction(new Action.GetSubjectsForUser());
  }

  getLoadedStatus() {
    return this.store$.pipe(
      select(Selector.selectSubjectStateLoaded)
    )
  }

  selectOptionalSubject() {
    return this.store$.pipe(
      select(Selector.selectSubjectStateOptional)
    )
  }

  selectRequiredSubject() {
    return this.store$.pipe(
      select(Selector.selectSubjectStateRequired)
    )
  }

}

