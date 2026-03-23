import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-understanding-shared-service-receiver',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './understanding-shared-service-receiver.component.html',
  styleUrl: './understanding-shared-service-receiver.component.scss',
})
export class UnderstandingSharedServiceReceiverComponent {
  constructor(public readonly sharedService: SharedService) {}
}
