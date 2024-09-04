import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, ButtonComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FontAwesomeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    BodyComponent,
    ButtonComponent,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}
