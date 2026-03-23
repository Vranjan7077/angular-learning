import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-live-api-sibling-sender',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live-api-sibling-sender.component.html',
  styleUrl: './live-api-sibling-sender.component.scss',
})
export class LiveApiSiblingSenderComponent {
  @Output() filterChanged = new EventEmitter<string>();
}
