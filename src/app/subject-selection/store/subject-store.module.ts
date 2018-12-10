import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SubjectStoreService } from './subject-store.service';
import { SubjectEffects } from './subject.effects';
import { reducer } from './subject.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('subject', reducer),
    EffectsModule.forFeature([SubjectEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [SubjectStoreService]
})
export class SubjectStoreModule { }

