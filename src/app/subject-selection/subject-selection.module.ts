import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcademicSubjectsModule} from './containers/academic-subjects/academic-subjects.module';

@NgModule({
  imports: [
    CommonModule,
    AcademicSubjectsModule
  ],
  declarations: []
})
export class SubjectSelectionModule { }
