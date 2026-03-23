import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingOutputChildComponent } from '../child/child.component';

@Component({
  selector: 'app-understanding-output-parent',
  standalone: true,
  imports: [CardComponent, UnderstandingOutputChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class UnderstandingOutputParentComponent {
  messageFromChild: string = 'No message received yet.';

  onChildMessage(message: string): void {
    this.messageFromChild = message;
  }
}
