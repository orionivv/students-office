import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeLayoutComponent} from './office-layout.component';
import {AuthGuardService} from '../../auth/services/auth-guard.service';
import {OfficePageComponent} from '../../office/containers/office-page/office-page.component';
import {AcademicSubjectsComponent} from '../../subject-selection/containers/academic-subjects/academic-subjects.component';

const routes: Routes = [
  {
    path: '',
    component: OfficeLayoutComponent,
    children: [
      {
        path: 'subject-selections',
        component: OfficePageComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            component: AcademicSubjectsComponent,
            pathMatch: 'full',
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class OfficeLayoutRoutingModule { }
