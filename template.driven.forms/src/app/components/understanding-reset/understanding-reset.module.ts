import { NgModule } from '@angular/core';
import { UnderstandingResetComponent } from './understanding-reset.component';

const components = [UnderstandingResetComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingResetModule {}
