import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-understanding-shared-service-sender',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-shared-service-sender.component.html',
  styleUrl: './understanding-shared-service-sender.component.scss',
})
export class UnderstandingSharedServiceSenderComponent {
  constructor(private readonly sharedService: SharedService) {}

  sendMessage(message: string): void {
    const trimmedValue = message.trim();
    this.sharedService.updateMessage(
      trimmedValue || 'Fallback message from sender',
    );
  }
}
