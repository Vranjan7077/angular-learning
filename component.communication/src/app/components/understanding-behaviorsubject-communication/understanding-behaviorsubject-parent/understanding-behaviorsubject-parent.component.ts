import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { UnderstandingBehaviorSubjectReceiverComponent } from '../understanding-behaviorsubject-receiver/understanding-behaviorsubject-receiver.component';
import { UnderstandingBehaviorSubjectSenderComponent } from '../understanding-behaviorsubject-sender/understanding-behaviorsubject-sender.component';

@Component({
  selector: 'app-understanding-behaviorsubject-parent',
  standalone: true,
  imports: [
    CardComponent,
    UnderstandingBehaviorSubjectSenderComponent,
    UnderstandingBehaviorSubjectReceiverComponent,
  ],
  templateUrl: './understanding-behaviorsubject-parent.component.html',
  styleUrl: './understanding-behaviorsubject-parent.component.scss',
})
export class UnderstandingBehaviorSubjectParentComponent {}

