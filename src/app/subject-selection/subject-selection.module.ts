import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcademicSubjectsModule} from './containers/academic-subjects/academic-subjects.module';
import {SubjectStoreModule} from './store/subject-store.module';

@NgModule({
  imports: [
    CommonModule,
    AcademicSubjectsModule,
    SubjectStoreModule
  ],
  declarations: []
})
export class SubjectSelectionModule { }
