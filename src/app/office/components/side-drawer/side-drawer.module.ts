import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideDrawerComponent } from './side-drawer.component';
import {MatIconModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  declarations: [SideDrawerComponent],
  exports: [SideDrawerComponent]
})
export class SideDrawerModule { }
