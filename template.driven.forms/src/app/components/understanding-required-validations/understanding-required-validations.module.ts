import { NgModule } from '@angular/core';
import { UnderstandingRequiredValidationsComponent } from './understanding-required-validations.component';

const components = [UnderstandingRequiredValidationsComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingRequiredValidationsModule {}
