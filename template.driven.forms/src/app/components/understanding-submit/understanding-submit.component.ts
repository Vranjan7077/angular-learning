import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-understanding-submit',
  standalone: true,
  imports: [FormsModule, CardComponent, CommonModule],
  templateUrl: './understanding-submit.component.html',
  styleUrl: './understanding-submit.component.scss',
})
export class UnderstandingSubmitComponent {
  submitCount = 0;
  lastSubmittedValue: Record<string, unknown> | null = null;

  submit(form: NgForm): void {
    this.submitCount += 1;
    this.lastSubmittedValue = { ...form.value };
  }
}
