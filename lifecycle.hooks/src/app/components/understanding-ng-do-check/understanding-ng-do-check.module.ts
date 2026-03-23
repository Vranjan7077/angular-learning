import { NgModule } from '@angular/core';
import { UnderstandingNgDoCheckComponent } from './understanding-ng-do-check.component';

const components = [UnderstandingNgDoCheckComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgDoCheckModule {}
