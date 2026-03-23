import { NgModule } from '@angular/core';
import { UnderstandingFormControlComponent } from './understanding-form-control.component';

const components = [UnderstandingFormControlComponent];
@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormControlModule {}
