import { NgModule } from '@angular/core';
import { UnderstandingFormValueChangesComponent } from './understanding-form-value-changes.component';

const components = [UnderstandingFormValueChangesComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormValueChangesModule {}
