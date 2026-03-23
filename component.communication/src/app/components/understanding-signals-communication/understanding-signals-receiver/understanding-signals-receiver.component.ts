import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-understanding-signals-receiver',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-signals-receiver.component.html',
  styleUrl: './understanding-signals-receiver.component.scss',
})
export class UnderstandingSignalsReceiverComponent {
  constructor(public readonly signalsService: SignalsService) {}
}

