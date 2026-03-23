import { NgModule } from '@angular/core';
import { UnderstandingNgModelGroupComponent } from './understanding-ng-model-group.component';

const components = [UnderstandingNgModelGroupComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgModelGroupModule {}
