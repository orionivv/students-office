import {UserInfo} from '../models/auth.model';
import {createFeatureSelector} from '@ngrx/store';

export interface AuthState {
  userInfo: UserInfo;
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorInfo: any;
}

export const authInitialState = {
  userInfo: null,
  loading: false,
  loaded: false,
  error: false,
  errorInfo: null,
};

export const authState = createFeatureSelector<AuthState>('auth');
