import { NgModule } from '@angular/core';
import { UnderstandingFormSubmitComponent } from './understanding-form-submit.component';

const components = [UnderstandingFormSubmitComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormSubmitModule {}
