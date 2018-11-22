import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {AuthLoginRequest} from '../../models/auth.model';

@Component({
  selector: 'auth-login-form',
  templateUrl: './auth-login-form.component.html',
  styleUrls: ['./auth-login-form.component.scss']
})
export class AuthLoginFormComponent implements OnInit {
  authForm: FormGroup;

  @Input() loading;
  @Output() submitLogin = new EventEmitter<AuthLoginRequest>();

  constructor(
    public formBuilder: FormBuilder,
    public snackbar: MatSnackBar,
  ) { }

  ngOnInit() {

    this.authForm = this.formBuilder.group({
      'email': this.formBuilder.control(null, [Validators.required, Validators.email]),
      'password':  this.formBuilder.control('', Validators.required),
    });

  }

  handleSubmit() {
    if (this.authForm.invalid) {
      this.snackbar.open(
        'Заполните правильно поля для входа',
        'X',
        {
          duration: 3000,
        }
      );
    } else {
      this.submitLogin.emit(this.authForm.value);
    }
  }
}
