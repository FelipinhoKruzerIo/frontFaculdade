import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  get identification() {
    return this.form.get('identification') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.router = inject(Router);
    this.form = this.formBuilder.group({
      identification: new FormControl(null, [
        // Validators.minLength(11),
        Validators.required,
      ]),
      password: new FormControl(null, [
        // Validators.minLength(11),
        Validators.required,
      ]),
    });
  }

  login() {
    console.log('this.form. :>> ', this.form.value);
  }
}
