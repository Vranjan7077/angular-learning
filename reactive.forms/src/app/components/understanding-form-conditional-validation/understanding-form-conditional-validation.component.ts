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
  selector: 'app-understanding-form-conditional-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-conditional-validation.component.html',
  styleUrl: './understanding-form-conditional-validation.component.scss',
})
export class UnderstandingFormConditionalValidationComponent {
  form = new FormGroup({
    age: new FormControl<number | null>(null),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.email],
    }),
  });

  isEmailRequired = false;

  constructor() {
    this.form.controls.age.valueChanges.subscribe((age) => {
      this.applyConditionalRules(age);
    });

    this.applyConditionalRules(this.form.controls.age.value);
  }

  private applyConditionalRules(age: number | null): void {
    const emailControl = this.form.controls.email;
    const shouldRequireEmail = (age ?? 0) > 60;

    this.isEmailRequired = shouldRequireEmail;

    if (shouldRequireEmail) {
      emailControl.setValidators([Validators.required, Validators.email]);
    } else {
      emailControl.setValidators([Validators.email]);
    }

    emailControl.updateValueAndValidity({ emitEvent: false });
  }
}
