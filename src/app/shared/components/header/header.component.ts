import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) navigateTo: string = '';
  @Input() showProfile: boolean = false;
  chevronLeft = faChevronLeft;
  user = faUser;

  constructor(public router: Router) {
    this.router = inject(Router);
  }
}
