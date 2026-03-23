import { NgModule } from '@angular/core';
import { UnderstandingNgAfterContentCheckedComponent } from './understanding-ng-after-content-checked.component';

const components = [UnderstandingNgAfterContentCheckedComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgAfterContentCheckedModule {}
