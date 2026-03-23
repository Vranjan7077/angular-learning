import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-group',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-group.component.html',
  styleUrl: './understanding-form-group.component.scss',
})
export class UnderstandingFormGroupComponent {
  userForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', { nonNullable: true }),
  });

  fillDemoData(): void {
    this.userForm.setValue({
      name: 'Alex',
      email: 'alex@example.com',
    });
  }

  resetForm(): void {
    this.userForm.reset({ name: '', email: '' });
  }
}
