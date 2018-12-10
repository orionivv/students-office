import {Action} from '@ngrx/store';

export enum SubjectActionTypes {

  GetSubjectsForUser = '[SUBJECT] Get Subjects For User',
  GetSubjectsForUserFailure = '[SUBJECT] Get Subjects For User Failure',
  GetSubjectsForUserSuccess = '[SUBJECT] Get Subjects For User Success',

}

export class GetSubjectsForUser implements Action {
  readonly type = SubjectActionTypes.GetSubjectsForUser;
}

export class GetSubjectsForUserSuccess implements Action {
  readonly type = SubjectActionTypes.GetSubjectsForUserSuccess;
  constructor(public payload: any) {}
}

export class GetSubjectsForUserFailure implements Action {
  readonly type = SubjectActionTypes.GetSubjectsForUserFailure;
}


export type SubjectAction =
  | GetSubjectsForUser
  | GetSubjectsForUserSuccess
  | GetSubjectsForUserFailure
  ;
