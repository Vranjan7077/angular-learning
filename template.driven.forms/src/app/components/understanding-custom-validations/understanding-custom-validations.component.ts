import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-custom-validations',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-custom-validations.component.html',
  styleUrl: './understanding-custom-validations.component.scss',
})
export class UnderstandingCustomValidationsComponent {
  minimumAllowedAge = 18;

  isUnderAge(ageValue: number | string | null | undefined): boolean {
    return Number(ageValue) < this.minimumAllowedAge;
  }
}
