import { NgModule } from '@angular/core';
import { UnderstandingFormArrayComponent } from './understanding-form-array.component';

const components = [UnderstandingFormArrayComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormArrayModule {}
