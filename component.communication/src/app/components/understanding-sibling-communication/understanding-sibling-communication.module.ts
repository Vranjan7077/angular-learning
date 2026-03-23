import { NgModule } from '@angular/core';
import { UnderstandingSiblingParentComponent } from './understanding-sibling-parent/understanding-sibling-parent.component';
import { UnderstandingSiblingAComponent } from './understanding-sibling-a/understanding-sibling-a.component';
import { UnderstandingSiblingBComponent } from './understanding-sibling-b/understanding-sibling-b.component';

const components = [
  UnderstandingSiblingParentComponent,
  UnderstandingSiblingAComponent,
  UnderstandingSiblingBComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingSiblingCommunicationModule {}
