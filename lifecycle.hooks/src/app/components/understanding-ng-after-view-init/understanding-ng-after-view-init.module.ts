import { NgModule } from '@angular/core';
import { UnderstandingNgAfterViewInitComponent } from './understanding-ng-after-view-init.component';

const components = [UnderstandingNgAfterViewInitComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgAfterViewInitModule {}
