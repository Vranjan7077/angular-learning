import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-control.component.html',
  styleUrl: './understanding-form-control.component.scss',
})
export class UnderstandingFormControlComponent {
  nameControl = new FormControl<string>('', { nonNullable: true });

  setExampleName(): void {
    this.nameControl.setValue('Vinay');
  }

  resetName(): void {
    this.nameControl.reset('');
  }
}
