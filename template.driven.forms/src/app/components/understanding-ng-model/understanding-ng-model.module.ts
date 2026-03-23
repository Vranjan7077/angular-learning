import { NgModule } from '@angular/core';
import { UnderstandingNgModelComponent } from './understanding-ng-model.component';

const components = [UnderstandingNgModelComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class UnderstandingNgModelModule {}
