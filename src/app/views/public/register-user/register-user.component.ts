import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

type Fields = {
  label: string;
  value: string;
  placeholder: string;
  type: 'text' | 'number' | 'email';
  options?: { label: string; value: string }[];
}[];

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent {
  form: FormGroup;

  fields: Fields = [
    {
      label: 'Primeiro nome',
      value: 'firstName',
      type: 'text',
      placeholder: 'Luara',
    },
    {
      label: 'Sobrenome',
      value: 'lastName',
      type: 'text',
      placeholder: 'Seib',
    },
    {
      label: 'Idade',
      value: 'age',
      type: 'number',
      placeholder: '36',
    },
    {
      label: 'Gênero',
      value: 'gender',
      type: 'text',
      placeholder: 'Feminino',
      options: [
        { label: 'Masculino', value: 'male' },
        { label: 'Feminino', value: 'female' },
        { label: 'Outro', value: 'other' },
      ],
    },
    {
      label: 'Tipo de usuário',
      value: 'userType',
      type: 'text',
      placeholder: 'Cuidador',
      options: [
        { label: 'Cuidador', value: 'caregiver' },
        { label: 'Idoso', value: 'oldPerson' },
      ],
    },
    {
      label: 'E-mail',
      value: 'email',
      type: 'email',
      placeholder: 'email@example',
    },
    {
      label: 'Telefone',
      value: 'phone',
      type: 'text',
      placeholder: '(12)34567-8910',
    },
  ];

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.router = inject(Router);
    this.form = this.formBuilder.group(
      this.fields.reduce((acc, field) => {
        return {
          ...acc,
          [field.value]: new FormControl(null, [
            // Validators.minLength(11),
            Validators.required,
          ]),
        };
      }, {})
    );
  }
}
