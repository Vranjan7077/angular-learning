import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-model-group',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-ng-model-group.component.html',
  styleUrl: './understanding-ng-model-group.component.scss',
})
export class UnderstandingNgModelGroupComponent {}
