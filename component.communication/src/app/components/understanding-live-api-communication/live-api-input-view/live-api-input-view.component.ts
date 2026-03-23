import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { LiveApiUser } from '../live-api-data.service';

@Component({
  selector: 'app-live-api-input-view',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live-api-input-view.component.html',
  styleUrl: './live-api-input-view.component.scss',
})
export class LiveApiInputViewComponent {
  @Input() user: LiveApiUser | null = null;
}
