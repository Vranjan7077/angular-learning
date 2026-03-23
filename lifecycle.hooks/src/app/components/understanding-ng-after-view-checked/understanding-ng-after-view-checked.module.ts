import { NgModule } from '@angular/core';
import { UnderstandingNgAfterViewCheckedComponent } from './understanding-ng-after-view-checked.component';

const components = [UnderstandingNgAfterViewCheckedComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgAfterViewCheckedModule {}
