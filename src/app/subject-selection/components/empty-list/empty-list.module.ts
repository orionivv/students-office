import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListComponent } from './empty-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmptyListComponent],
  exports: [EmptyListComponent]
})
export class EmptyListModule { }
