import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as Action from './subject.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {SubjectStoreService} from './subject-store.service';
import {SubjectApiService} from '../services/subject-api.service';
import {of} from 'rxjs';


@Injectable()
export class SubjectEffects {

  constructor(
    private actions$: Actions,
    private subjectStoreService: SubjectStoreService,
    private subjectApiService: SubjectApiService,
  ) { }


  @Effect()
  getSubjectsForUser$ = this.actions$.pipe(
    ofType<Action.GetSubjectsForUser>(Action.SubjectActionTypes.GetSubjectsForUser),
    withLatestFrom(
      this.subjectStoreService.getLoadedStatus()
    ),
    switchMap(([action, isLoaded]) => {
      if (!isLoaded) {
        return this.subjectApiService.getSubject().pipe(
          map(data => {
            return new Action.GetSubjectsForUserSuccess(data);
          })
        );
      } else {
        return of();
      }
    }),
  );



}
