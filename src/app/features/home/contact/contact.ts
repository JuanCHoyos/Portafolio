import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SendEmail } from '../../../core/services/send-email';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { UIHeading, UIICon } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-heading/ui-heading';
@Component({
  selector: 'contact',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    MessageModule,
    ReactiveFormsModule,
    TextareaModule,
    UIHeading,
    UIICon,
  ],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly sendEmail = inject(SendEmail);
  private readonly fb = inject(FormBuilder);
  HeadingType = HeadingType;
  form = signal<FormGroup>(this.fb.group({}));

  constructor() {
    const form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.form.set(form);
  }

  submit() {
    if (this.form().invalid) return;

    this.sendEmail.send(this.form().value);
  }
}
