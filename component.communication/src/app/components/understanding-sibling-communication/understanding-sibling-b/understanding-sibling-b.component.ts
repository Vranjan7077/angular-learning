import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-understanding-sibling-b',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-sibling-b.component.html',
  styleUrl: './understanding-sibling-b.component.scss',
})
export class UnderstandingSiblingBComponent {
  @Input() message: string = '';
}

