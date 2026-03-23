import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-understanding-signals-sender',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-signals-sender.component.html',
  styleUrl: './understanding-signals-sender.component.scss',
})
export class UnderstandingSignalsSenderComponent {
  constructor(private readonly signalsService: SignalsService) {}

  sendMessage(message: string): void {
    const trimmedValue = message.trim();
    this.signalsService.updateMessage(
      trimmedValue || 'Fallback message from Signals sender',
    );
  }
}
