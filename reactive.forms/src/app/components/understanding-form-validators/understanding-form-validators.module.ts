import { NgModule } from '@angular/core';
import { UnderstandingFormValidatorsComponent } from './understanding-form-validators.component';

const components = [UnderstandingFormValidatorsComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormValidatorsModule {}
