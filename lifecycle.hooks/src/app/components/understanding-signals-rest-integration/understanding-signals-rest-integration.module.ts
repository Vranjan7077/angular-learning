import { NgModule } from '@angular/core';
import { UnderstandingSignalsRestIntegrationComponent } from './understanding-signals-rest-integration.component';

const components = [UnderstandingSignalsRestIntegrationComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingSignalsRestIntegrationModule {}
