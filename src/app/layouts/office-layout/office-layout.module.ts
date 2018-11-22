import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {OfficeLayoutComponent} from './office-layout.component';
import {OfficeLayoutRoutingModule} from './office-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OfficeLayoutRoutingModule,
  ],
  exports: [
    RouterModule,
    OfficeLayoutComponent
  ],
  declarations: [OfficeLayoutComponent]
})
export class OfficeLayoutModule { }
