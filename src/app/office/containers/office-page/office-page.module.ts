import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficePageComponent } from './office-page.component';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import {OfficeHeaderModule} from '../office-header/office-header.module';
import {SideDrawerModule} from '../../components/side-drawer/side-drawer.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    OfficeHeaderModule,
    MatSidenavModule,
    MatButtonModule,
    SideDrawerModule,
    RouterModule
  ],
  declarations: [OfficePageComponent],
  exports: [OfficePageComponent]
})
export class OfficePageModule { }
