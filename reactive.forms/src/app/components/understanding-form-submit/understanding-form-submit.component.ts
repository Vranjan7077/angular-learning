import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-submit',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-submit.component.html',
  styleUrl: './understanding-form-submit.component.scss',
})
export class UnderstandingFormSubmitComponent {
  form = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
  });

  submittedValue: { name: string } | null = null;

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.submittedValue = this.form.getRawValue();
  }

  clearSubmission(): void {
    this.submittedValue = null;
  }
}
