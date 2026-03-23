import { NgModule } from '@angular/core';
import { UnderstandingLifecycleLoggerPanelComponent } from './understanding-lifecycle-logger-panel.component';

const components = [UnderstandingLifecycleLoggerPanelComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingLifecycleLoggerPanelModule {}
