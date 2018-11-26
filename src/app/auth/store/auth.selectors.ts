import {createSelector} from '@ngrx/store';
import {AuthState, authState} from './auth.state';


export const selectUserInfoLoading = createSelector(authState, (state: AuthState) => state.loading);
export const selectUserInfoLoaded = createSelector(authState, (state: AuthState) => state.loaded);
export const selectUserInfoError = createSelector(authState, (state: AuthState) => state.error);

export const selectUserInfo = createSelector(authState, (state: AuthState) => state.userInfo);
export const selectUserName = createSelector(authState, (state: AuthState) => state.userInfo && state.userInfo.name);
