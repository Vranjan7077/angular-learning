import { NgModule } from '@angular/core';
import { UnderstandingDisablingComponent } from './understanding-disabling.component';

const components = [UnderstandingDisablingComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingDisablingModule {}
