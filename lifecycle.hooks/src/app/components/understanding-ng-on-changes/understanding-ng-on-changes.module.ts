import { NgModule } from '@angular/core';
import { UnderstandingNgOnChangesComponent } from './understanding-ng-on-changes.component';

const components = [UnderstandingNgOnChangesComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgOnChangesModule {}
