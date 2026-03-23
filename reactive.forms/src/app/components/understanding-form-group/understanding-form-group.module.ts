import { NgModule } from '@angular/core';
import { UnderstandingFormGroupComponent } from './understanding-form-group.component';

const components = [UnderstandingFormGroupComponent];
@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormGroupModule {}
