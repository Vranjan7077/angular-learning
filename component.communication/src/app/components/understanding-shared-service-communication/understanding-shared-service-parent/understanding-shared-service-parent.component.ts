import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingSharedServiceReceiverComponent } from '../understanding-shared-service-receiver/understanding-shared-service-receiver.component';
import { UnderstandingSharedServiceSenderComponent } from '../understanding-shared-service-sender/understanding-shared-service-sender.component';

@Component({
  selector: 'app-understanding-shared-service-parent',
  standalone: true,
  imports: [
    CardComponent,
    UnderstandingSharedServiceSenderComponent,
    UnderstandingSharedServiceReceiverComponent,
  ],
  templateUrl: './understanding-shared-service-parent.component.html',
  styleUrl: './understanding-shared-service-parent.component.scss',
})
export class UnderstandingSharedServiceParentComponent {}
