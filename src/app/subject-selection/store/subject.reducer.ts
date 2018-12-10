import {subjectInitialState, SubjectState} from './subject.state';
import {SubjectAction, SubjectActionTypes} from './subject.actions';


export function reducer(state = subjectInitialState, action: SubjectAction): SubjectState {
  switch (action.type) {

    case SubjectActionTypes.GetSubjectsForUserSuccess: {
      return {
        ...state,
        loaded: true,
        optional: action.payload.optional,
        required: action.payload.required

      }
    }


    default: {
      return state;
    }
  }

}
