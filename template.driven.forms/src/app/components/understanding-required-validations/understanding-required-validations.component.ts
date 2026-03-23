import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-required-validations',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-required-validations.component.html',
  styleUrl: './understanding-required-validations.component.scss',
})
export class UnderstandingRequiredValidationsComponent {}
