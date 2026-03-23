import { NgModule } from '@angular/core';
import { UnderstandingSubmitComponent } from './understanding-submit.component';

const components = [UnderstandingSubmitComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingSubmitModule {}
