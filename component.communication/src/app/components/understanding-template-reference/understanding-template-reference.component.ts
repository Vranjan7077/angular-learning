import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-template-reference',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-template-reference.component.html',
  styleUrl: './understanding-template-reference.component.scss',
})
export class UnderstandingTemplateReferenceComponent {
  show(value: string) {
    alert(value);
  }
}
