import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthStoreService } from './auth-store.service';
import { AuthEffects } from './auth.effects';
import { reducer } from './auth.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [AuthStoreService]
})
export class AuthStoreModule { }

