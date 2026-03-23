import { NgModule } from '@angular/core';
import { UnderstandingSignalsParentComponent } from './understanding-signals-parent/understanding-signals-parent.component';
import { UnderstandingSignalsReceiverComponent } from './understanding-signals-receiver/understanding-signals-receiver.component';
import { UnderstandingSignalsSenderComponent } from './understanding-signals-sender/understanding-signals-sender.component';

const components = [
  UnderstandingSignalsParentComponent,
  UnderstandingSignalsSenderComponent,
  UnderstandingSignalsReceiverComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingSignalsCommunicationModule {}

