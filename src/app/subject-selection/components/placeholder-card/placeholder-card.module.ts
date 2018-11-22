import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderCardComponent } from './placeholder-card.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [PlaceholderCardComponent],
  exports: [PlaceholderCardComponent]
})
export class PlaceholderCardModule { }
