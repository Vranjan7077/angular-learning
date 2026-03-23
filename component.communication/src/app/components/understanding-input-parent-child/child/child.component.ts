import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-understanding-input-child',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class UnderstandingInputChildComponent {
  @Input() childData: string = '';
}
