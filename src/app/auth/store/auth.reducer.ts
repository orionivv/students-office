import {authInitialState, AuthState} from './auth.state';
import {AuthAction, AuthActionTypes} from './auth.actions';


export function reducer(state = authInitialState, action: AuthAction): AuthState {
  switch (action.type) {

    case AuthActionTypes.Logout: {
      return authInitialState;
    }

    case AuthActionTypes.Login: {
      return {
        ...state,
        loading: true,
      };
    }

    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        loading: false,
        error: true,
        // loaded: true,
      };
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loading: false,
        error: false,
        // loaded: true,
      };
    }

    case AuthActionTypes.GetUserInfo: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case AuthActionTypes.GetUserInfoSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        userInfo: action.payload,
      };
    }

    case AuthActionTypes.GetUserInfoFailure: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }

    default: {
      return state;
    }
  }

}
