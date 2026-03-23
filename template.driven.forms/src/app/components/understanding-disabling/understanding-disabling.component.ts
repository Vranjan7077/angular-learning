import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-disabling',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-disabling.component.html',
  styleUrl: './understanding-disabling.component.scss',
})
export class UnderstandingDisablingComponent {}
