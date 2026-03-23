import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { LiveApiCommunicationService } from '../live-api-communication.service';

@Component({
  selector: 'app-live-api-service-receiver',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './live-api-service-receiver.component.html',
  styleUrl: './live-api-service-receiver.component.scss',
})
export class LiveApiServiceReceiverComponent {
  constructor(
    public readonly communicationService: LiveApiCommunicationService,
  ) {}
}
