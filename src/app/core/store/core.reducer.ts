import {CoreActionTypes} from './core.actions';

export function testReducer(state = false, action): boolean {
  switch (action.type) {

    // case CoreActionTypes.LogOut: {
    //   return state;
    // }


    default: {
      return state;
    }
  }
}
