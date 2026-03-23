import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-value-changes',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-value-changes.component.html',
  styleUrl: './understanding-form-value-changes.component.scss',
})
export class UnderstandingFormValueChangesComponent {
  searchControl = new FormControl<string>('', { nonNullable: true });

  latestValue = '';
  valueHistory: string[] = [];

  constructor() {
    this.searchControl.valueChanges.subscribe((value) => {
      this.latestValue = value;
      this.valueHistory = [value, ...this.valueHistory].slice(0, 5);
    });
  }

  clearHistory(): void {
    this.latestValue = '';
    this.valueHistory = [];
    this.searchControl.setValue('');
  }
}
