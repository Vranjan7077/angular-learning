import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-pattern-validations',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-pattern-validations.component.html',
  styleUrl: './understanding-pattern-validations.component.scss',
})
export class UnderstandingPatternValidationsComponent {}
