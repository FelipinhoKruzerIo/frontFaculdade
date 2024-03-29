import { Component } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  async teste() {
    const res = await this.notificationService.teste();
  }
}
