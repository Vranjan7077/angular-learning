import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingSiblingAComponent } from '../understanding-sibling-a/understanding-sibling-a.component';
import { UnderstandingSiblingBComponent } from '../understanding-sibling-b/understanding-sibling-b.component';

@Component({
  selector: 'app-understanding-sibling-parent',
  standalone: true,
  imports: [CardComponent, UnderstandingSiblingAComponent, UnderstandingSiblingBComponent],
  templateUrl: './understanding-sibling-parent.component.html',
  styleUrl: './understanding-sibling-parent.component.scss',
})
export class UnderstandingSiblingParentComponent {
  sharedMessage: string = 'Initial value from Parent';

  onMessageFromSiblingA(message: string): void {
    this.sharedMessage = message;
  }
}

