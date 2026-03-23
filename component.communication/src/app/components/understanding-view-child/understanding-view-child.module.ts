import { NgModule } from '@angular/core';
import { UnderstandingViewChildComponent } from './understanding-view-child-child/understanding-view-child-child.component';
import { UnderstandingViewChildParentComponent } from './understanding-view-child-parent/understanding-view-child-parent.component';

const components = [
  UnderstandingViewChildComponent,
  UnderstandingViewChildParentComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingViewChildModule {}
