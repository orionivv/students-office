import {Action} from '@ngrx/store';

export enum CoreActionTypes {
  CoreTestOn =            '[Core] Test On',
  CoreTestOff =           '[Core] Test Off',
  ShowLoadingIndicator =  '[Core] Show Loading Indicator',
  HideLoadingIndicator =  '[Core] Hide Loading Indicator',
}

export class CoreTestOn implements Action {
  readonly type = CoreActionTypes.CoreTestOn;
}

export class CoreTestOff implements Action {
  readonly type = CoreActionTypes.CoreTestOff;
}

export type CoreActions =
  | CoreTestOn
  | CoreTestOff
;
