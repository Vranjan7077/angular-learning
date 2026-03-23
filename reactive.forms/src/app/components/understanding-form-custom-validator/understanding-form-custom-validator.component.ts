import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { ageValidator } from './validations/ageValidator';

@Component({
  selector: 'app-understanding-form-custom-validator',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-custom-validator.component.html',
  styleUrl: './understanding-form-custom-validator.component.scss',
})
export class UnderstandingFormCustomValidatorComponent {
  ageControl = new FormControl<number | null>(null, {
    validators: [ageValidator],
  });

  setMinorAge(): void {
    this.ageControl.setValue(16);
    this.ageControl.markAsTouched();
  }

  setAdultAge(): void {
    this.ageControl.setValue(21);
    this.ageControl.markAsTouched();
  }
}
