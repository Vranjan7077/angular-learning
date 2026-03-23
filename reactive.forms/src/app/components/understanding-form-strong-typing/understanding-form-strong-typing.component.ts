import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-strong-typing',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-strong-typing.component.html',
  styleUrl: './understanding-form-strong-typing.component.scss',
})
export class UnderstandingFormStrongTypingComponent {
  form = new FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
  }>({
    name: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', { nonNullable: true }),
  });

  submittedProfile: { name: string; email: string } | null = null;

  submitProfile(): void {
    this.submittedProfile = this.form.getRawValue();
  }

  resetProfile(): void {
    this.form.reset({ name: '', email: '' });
    this.submittedProfile = null;
  }
}
