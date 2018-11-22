import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestModule} from './containers/test/test.module';
import {CoreStoreModule} from './store/core-store.module';
@NgModule({
  imports: [
    CommonModule,
    CoreStoreModule,
    TestModule
  ],
  declarations: [],
  exports: [TestModule]
})
export class CoreModule { }
