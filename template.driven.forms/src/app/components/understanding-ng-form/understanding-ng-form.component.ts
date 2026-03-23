import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-form',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-ng-form.component.html',
  styleUrl: './understanding-ng-form.component.scss',
})
export class UnderstandingNgFormComponent {}
