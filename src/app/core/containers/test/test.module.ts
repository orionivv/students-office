import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from './test.component';
import {MaterialModule} from '../../../../shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule { }
