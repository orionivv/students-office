import {createSelector} from '@ngrx/store';
import {SubjectState, subjectState} from './subject.state';


export const selectSubjectStateLoading = createSelector(subjectState, (state: SubjectState) => state.loading);
export const selectSubjectStateLoaded = createSelector(subjectState, (state: SubjectState) => state.loaded);
export const selectSubjectStateError = createSelector(subjectState, (state: SubjectState) => state.error);

export const selectSubjectStateOptional = createSelector(subjectState, (state: SubjectState) => state.optional);
export const selectSubjectStateRequired = createSelector(subjectState, (state: SubjectState) => state.required);
