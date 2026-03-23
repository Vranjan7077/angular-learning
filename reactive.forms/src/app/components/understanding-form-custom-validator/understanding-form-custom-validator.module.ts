import { NgModule } from '@angular/core';
import { UnderstandingFormCustomValidatorComponent } from './understanding-form-custom-validator.component';

const components = [UnderstandingFormCustomValidatorComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormCustomValidatorModule {}
