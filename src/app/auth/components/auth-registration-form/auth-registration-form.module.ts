import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRegistrationFormComponent } from './auth-registration-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthRegistrationFormComponent],
  exports: [AuthRegistrationFormComponent]
})
export class AuthRegistrationFormModule { }
