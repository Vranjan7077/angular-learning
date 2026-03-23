import { NgModule } from '@angular/core';
import { UnderstandingFormConditionalValidationComponent } from './understanding-form-conditional-validation.component';

const components = [UnderstandingFormConditionalValidationComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormConditionalValidationModule {}
