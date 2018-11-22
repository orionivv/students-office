import {createSelector} from '@ngrx/store';


export const selectGlobalState = (state => state);

export const selectTestStatus = createSelector(selectGlobalState, state => state.isTest);
