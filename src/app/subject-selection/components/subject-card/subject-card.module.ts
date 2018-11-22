import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from './subject-card.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [SubjectCardComponent],
  exports: [SubjectCardComponent]
})
export class SubjectCardModule { }
