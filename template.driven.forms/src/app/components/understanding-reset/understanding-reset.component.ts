import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-reset',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './understanding-reset.component.html',
  styleUrl: './understanding-reset.component.scss',
})
export class UnderstandingResetComponent {
  resetWithDefaults(form: NgForm): void {
    form.reset({
      name: 'Angular Learner',
      email: 'learner@example.com',
    });
  }
}
