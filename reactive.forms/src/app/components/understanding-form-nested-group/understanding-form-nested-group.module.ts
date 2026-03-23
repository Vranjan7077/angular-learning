import { NgModule } from '@angular/core';
import { UnderstandingFormNestedGroupComponent } from './understanding-form-nested-group.component';

const components = [UnderstandingFormNestedGroupComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingFormNestedGroupModule {}
