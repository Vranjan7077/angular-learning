import { NgModule } from '@angular/core';
import { UnderstandingSharedServiceParentComponent } from './understanding-shared-service-parent/understanding-shared-service-parent.component';
import { UnderstandingSharedServiceReceiverComponent } from './understanding-shared-service-receiver/understanding-shared-service-receiver.component';
import { UnderstandingSharedServiceSenderComponent } from './understanding-shared-service-sender/understanding-shared-service-sender.component';

const components = [
  UnderstandingSharedServiceParentComponent,
  UnderstandingSharedServiceSenderComponent,
  UnderstandingSharedServiceReceiverComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingSharedServiceCommunicationModule {}
