import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-understanding-sibling-a',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-sibling-a.component.html',
  styleUrl: './understanding-sibling-a.component.scss',
})
export class UnderstandingSiblingAComponent {
  @Output() messageChange = new EventEmitter<string>();

  sendMessage(value: string): void {
    const trimmedValue = value.trim();
    this.messageChange.emit(trimmedValue || 'Updated by Sibling A');
  }
}

