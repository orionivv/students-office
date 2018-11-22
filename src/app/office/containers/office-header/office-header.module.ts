import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeHeaderComponent } from './office-header.component';
import {HeaderModule} from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [OfficeHeaderComponent],
  exports: [OfficeHeaderComponent]
})
export class OfficeHeaderModule { }
