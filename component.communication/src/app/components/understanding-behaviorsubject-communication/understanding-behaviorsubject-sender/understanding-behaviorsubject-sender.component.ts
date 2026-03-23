import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { BehaviorSubjectService } from '../behavior-subject.service';

@Component({
  selector: 'app-understanding-behaviorsubject-sender',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './understanding-behaviorsubject-sender.component.html',
  styleUrl: './understanding-behaviorsubject-sender.component.scss',
})
export class UnderstandingBehaviorSubjectSenderComponent {
  constructor(private readonly behaviorSubjectService: BehaviorSubjectService) {}

  sendMessage(message: string): void {
    const trimmedValue = message.trim();
    this.behaviorSubjectService.updateMessage(
      trimmedValue || 'Fallback message from BehaviorSubject sender',
    );
  }
}

