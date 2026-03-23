import { NgModule } from '@angular/core';
import { UnderstandingLiveApiCommunicationComponent } from './understanding-live-api-communication.component';
import { LiveApiInputViewComponent } from './live-api-input-view/live-api-input-view.component';
import { LiveApiOutputActionComponent } from './live-api-output-action/live-api-output-action.component';
import { LiveApiSiblingSenderComponent } from './live-api-sibling-sender/live-api-sibling-sender.component';
import { LiveApiSiblingReceiverComponent } from './live-api-sibling-receiver/live-api-sibling-receiver.component';
import { LiveApiServiceSenderComponent } from './live-api-service-sender/live-api-service-sender.component';
import { LiveApiServiceReceiverComponent } from './live-api-service-receiver/live-api-service-receiver.component';

const components = [
  UnderstandingLiveApiCommunicationComponent,
  LiveApiInputViewComponent,
  LiveApiOutputActionComponent,
  LiveApiSiblingSenderComponent,
  LiveApiSiblingReceiverComponent,
  LiveApiServiceSenderComponent,
  LiveApiServiceReceiverComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingLiveApiCommunicationModule {}
