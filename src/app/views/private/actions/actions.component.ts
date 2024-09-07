import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  form: FormGroup;
  actions: {
    icon: 'fire' | 'wind' | 'person-falling-burst';
    label: string;
    message: string;
    value: 'fireMessage' | 'gasMessage' | 'fallMessage';
  }[] = [
    {
      icon: 'fire',
      label: 'Fire Alert',
      message: 'Instant notification for fire',
      value: 'fireMessage',
    },
    {
      icon: 'wind',
      label: 'Gas Leak Detection',
      message: 'Early gas leak warnings',
      value: 'gasMessage',
    },
    {
      icon: 'person-falling-burst',
      label: 'Fall Detection',
      message: 'Instant alerts for falls',
      value: 'fallMessage',
    },
  ];

  get phone() {
    return this.form.get('phone') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private toastrService: ToastrService
  ) {
    this.form = this.formBuilder.group({
      phone: new FormControl(
        this.usersService.getUserFromLocalStorage()?.phone || null,
        [Validators.minLength(11), Validators.required]
      ),
    });
  }

  async notify(action: 'fireMessage' | 'gasMessage' | 'fallMessage') {
    try {
      if (!this.form.valid) {
        this.toastrService.warning(
          'Telefone necessário, atualize as informações'
        );
        return;
      }
      const res = await this.notificationService.add({
        action,
        ...this.form.value,
      });
      this.toastrService.success(res.message);
    } catch (error: any) {
      this.toastrService.error(error?.error?.message || 'Erro');
    }
  }
}
