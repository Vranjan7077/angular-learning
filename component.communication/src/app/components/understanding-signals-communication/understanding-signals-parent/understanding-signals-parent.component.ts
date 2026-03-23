import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingSignalsReceiverComponent } from '../understanding-signals-receiver/understanding-signals-receiver.component';
import { UnderstandingSignalsSenderComponent } from '../understanding-signals-sender/understanding-signals-sender.component';

@Component({
  selector: 'app-understanding-signals-parent',
  standalone: true,
  imports: [
    CardComponent,
    UnderstandingSignalsSenderComponent,
    UnderstandingSignalsReceiverComponent,
  ],
  templateUrl: './understanding-signals-parent.component.html',
  styleUrl: './understanding-signals-parent.component.scss',
})
export class UnderstandingSignalsParentComponent {}

