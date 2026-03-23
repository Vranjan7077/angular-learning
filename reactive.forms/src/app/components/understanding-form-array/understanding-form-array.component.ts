import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-form-array',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-form-array.component.html',
  styleUrl: './understanding-form-array.component.scss',
})
export class UnderstandingFormArrayComponent {
  skills = new FormArray<FormControl<string>>([
    new FormControl<string>('', { nonNullable: true }),
  ]);

  form = new FormGroup({
    skills: this.skills,
  });

  submittedSkills: string[] | null = null;

  get skillsControls(): FormControl<string>[] {
    return this.skills.controls;
  }

  addSkill(): void {
    this.skills.push(new FormControl<string>('', { nonNullable: true }));
  }

  removeSkill(index: number): void {
    if (this.skills.length === 1) {
      return;
    }

    this.skills.removeAt(index);
  }

  submitSkills(): void {
    this.submittedSkills = this.form.getRawValue().skills;
  }
}
