import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { LiveApiPost } from '../live-api-data.service';

@Component({
  selector: 'app-live-api-sibling-receiver',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live-api-sibling-receiver.component.html',
  styleUrl: './live-api-sibling-receiver.component.scss',
})
export class LiveApiSiblingReceiverComponent {
  @Input() posts: LiveApiPost[] = [];
  @Input() filterTerm = '';
}
