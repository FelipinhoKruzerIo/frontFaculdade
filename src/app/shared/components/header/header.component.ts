import { Component, Input } from '@angular/core';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input({ required: true }) title: string = '';
  @Input() showProfile: boolean = false;
  chevronLeft = faChevronLeft;
  user = faUser;
}
