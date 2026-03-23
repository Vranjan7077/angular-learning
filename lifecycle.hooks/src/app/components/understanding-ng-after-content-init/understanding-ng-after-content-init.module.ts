import { NgModule } from '@angular/core';
import { UnderstandingNgAfterContentInitComponent } from './understanding-ng-after-content-init.component';

const components = [UnderstandingNgAfterContentInitComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgAfterContentInitModule {}
