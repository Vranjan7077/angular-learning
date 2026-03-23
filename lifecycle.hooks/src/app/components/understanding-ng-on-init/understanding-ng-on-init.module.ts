import { NgModule } from '@angular/core';
import { UnderstandingNgOnInitComponent } from './understanding-ng-on-init.component';

const components = [UnderstandingNgOnInitComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgOnInitModule {}
