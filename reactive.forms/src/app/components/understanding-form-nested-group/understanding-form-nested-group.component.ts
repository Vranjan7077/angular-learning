import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-nested-group',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-nested-group.component.html',
  styleUrl: './understanding-form-nested-group.component.scss',
})
export class UnderstandingFormNestedGroupComponent {
  form = new FormGroup({
    address: new FormGroup({
      city: new FormControl<string>('', { nonNullable: true }),
      zip: new FormControl<string>('', { nonNullable: true }),
    }),
  });

  prefillAddress(): void {
    this.form.patchValue({
      address: {
        city: 'Bengaluru',
        zip: '560001',
      },
    });
  }

  resetAddress(): void {
    this.form.reset({
      address: {
        city: '',
        zip: '',
      },
    });
  }
}
