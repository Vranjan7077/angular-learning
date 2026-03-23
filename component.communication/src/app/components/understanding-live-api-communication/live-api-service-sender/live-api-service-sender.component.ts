import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { LiveApiCommunicationService } from '../live-api-communication.service';

@Component({
  selector: 'app-live-api-service-sender',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './live-api-service-sender.component.html',
  styleUrl: './live-api-service-sender.component.scss',
})
export class LiveApiServiceSenderComponent {
  @Input() userName = '';
  @Input() postTitle = '';

  constructor(
    private readonly communicationService: LiveApiCommunicationService,
  ) {}

  publishApiData(): void {
    this.communicationService.publish(
      `User: ${this.userName || 'N/A'} | Post: ${this.postTitle || 'N/A'}`,
    );
  }

  publishCustomMessage(message: string): void {
    const trimmedValue = message.trim();
    this.communicationService.publish(
      trimmedValue || 'Custom message is empty.',
    );
  }
}
