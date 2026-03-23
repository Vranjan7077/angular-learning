import { NgModule } from '@angular/core';
import { UnderstandingBehaviorSubjectParentComponent } from './understanding-behaviorsubject-parent/understanding-behaviorsubject-parent.component';
import { UnderstandingBehaviorSubjectReceiverComponent } from './understanding-behaviorsubject-receiver/understanding-behaviorsubject-receiver.component';
import { UnderstandingBehaviorSubjectSenderComponent } from './understanding-behaviorsubject-sender/understanding-behaviorsubject-sender.component';

const components = [
  UnderstandingBehaviorSubjectParentComponent,
  UnderstandingBehaviorSubjectSenderComponent,
  UnderstandingBehaviorSubjectReceiverComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingBehaviorSubjectCommunicationModule {}
