import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreStoreModule} from './store/core-store.module';
@NgModule({
  imports: [
    CommonModule,
    CoreStoreModule,
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
