import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { usernameValidator } from './validators/usernameValidator';

@Component({
  selector: 'app-understanding-form-async-validator',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-async-validator.component.html',
  styleUrl: './understanding-form-async-validator.component.scss',
})
export class UnderstandingFormAsyncValidatorComponent {
  usernameControl = new FormControl<string>('', {
    nonNullable: true,
    asyncValidators: [usernameValidator],
    updateOn: 'blur',
  });
}
