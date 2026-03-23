import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-validators',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-validators.component.html',
  styleUrl: './understanding-form-validators.component.scss',
})
export class UnderstandingFormValidatorsComponent {
  form = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  get emailControl(): FormControl<string> {
    return this.form.controls.email;
  }

  get emailErrorMessage(): string {
    if (this.emailControl.hasError('required')) {
      return 'Email is required.';
    }

    if (this.emailControl.hasError('email')) {
      return 'Enter a valid email address.';
    }

    return '';
  }
}
