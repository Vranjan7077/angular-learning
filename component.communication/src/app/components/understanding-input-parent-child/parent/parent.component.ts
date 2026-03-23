import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingInputChildComponent } from '../child/child.component';

@Component({
  selector: 'app-understanding-input-parent',
  standalone: true,
  imports: [CardComponent, UnderstandingInputChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class UnderstandingInputParentComponent {
  parentMessage: string = 'Hello from Parent Component!';
}
