import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-understanding-output-child',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class UnderstandingOutputChildComponent {
  @Output() notifyParent = new EventEmitter<string>();

  sendMessageToParent(): void {
    this.notifyParent.emit(
      'Hello Parent, this message is from Child via @Output!',
    );
  }
}
