import { NgModule } from '@angular/core';
import { UnderstandingInputChildComponent } from './child/child.component';
import { UnderstandingInputParentComponent } from './parent/parent.component';

const components = [
  UnderstandingInputChildComponent,
  UnderstandingInputParentComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingInputParentChildModule {}
