import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-live-api-output-action',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live-api-output-action.component.html',
  styleUrl: './live-api-output-action.component.scss',
})
export class LiveApiOutputActionComponent {
  @Output() nextPostRequested = new EventEmitter<void>();
}
