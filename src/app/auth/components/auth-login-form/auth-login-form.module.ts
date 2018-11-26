import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginFormComponent } from './auth-login-form.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressBarModule, MatSnackBarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,

    ReactiveFormsModule,

  ],
  declarations: [AuthLoginFormComponent],
  exports: [AuthLoginFormComponent]
})
export class AuthLoginFormModule { }
