import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './models/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-typed-model',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-typed-model.component.html',
  styleUrl: './understanding-typed-model.component.scss',
})
export class UnderstandingTypedModelComponent {
  user: User = {
    name: '',
    email: '',
  };
}
