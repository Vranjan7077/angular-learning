import { NgModule } from '@angular/core';
import { UnderstandingContentProjectionComponent } from './understanding-content-projection.component';

const components = [UnderstandingContentProjectionComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingContentProjectionModule {}
