import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutsModule} from './layouts/layouts.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: `/login`
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    LayoutsModule
  ]
})
export class AppRoutingModule { }
