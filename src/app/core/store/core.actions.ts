import {Action} from '@ngrx/store';

export enum CoreActionTypes {
  ShowLoadingIndicator =  '[Core] Show Loading Indicator',
  HideLoadingIndicator =  '[Core] Hide Loading Indicator',
  HeaderActionBtnClick =  '[Core] Click Btn on Header',
}

export class HeaderActionBtnClick implements Action {
  readonly type = CoreActionTypes.HeaderActionBtnClick;
}


export type CoreActions =
  | HeaderActionBtnClick
;
