import { NgModule } from '@angular/core';
import { UnderstandingFormAsyncValidatorComponent } from './understanding-form-async-validator.component';

const components = [UnderstandingFormAsyncValidatorComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormAsyncValidatorModule {}
