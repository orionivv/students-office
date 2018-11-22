import {CoreActionTypes} from './core.actions';

export function testReducer(state = false, action): boolean {
  switch (action.type) {

    case CoreActionTypes.CoreTestOn: {
      return true;
    }

    case CoreActionTypes.CoreTestOff: {
      return false;
    }

    default: {
      return state;
    }
  }
}
