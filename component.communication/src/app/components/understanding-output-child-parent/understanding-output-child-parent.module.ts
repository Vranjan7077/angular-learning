import { NgModule } from '@angular/core';
import { UnderstandingOutputChildComponent } from './child/child.component';
import { UnderstandingOutputParentComponent } from './parent/parent.component';

const components = [
  UnderstandingOutputChildComponent,
  UnderstandingOutputParentComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingOutputChildParentModule {}
