import {createFeatureSelector} from '@ngrx/store';
import {RequiredSubjectModel} from '../models/subject.model';

export interface SubjectState {
  required: Array<string>;
  optional: Array<RequiredSubjectModel>;
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorInfo: any;
}

export const subjectInitialState = {
  required: [],
  optional: [],
  loading: false,
  loaded: false,
  error: false,
  errorInfo: null,
};

export const subjectState = createFeatureSelector<SubjectState>('subject');
