import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { BehaviorSubjectService } from '../behavior-subject.service';

@Component({
  selector: 'app-understanding-behaviorsubject-receiver',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './understanding-behaviorsubject-receiver.component.html',
  styleUrl: './understanding-behaviorsubject-receiver.component.scss',
})
export class UnderstandingBehaviorSubjectReceiverComponent {
  constructor(public readonly behaviorSubjectService: BehaviorSubjectService) {}
}

